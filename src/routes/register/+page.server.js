import { users } from '$db/users'
import { fail, redirect } from '@sveltejs/kit'

let errorMessage = ""

export async function load({ cookies }) {
    const authToken = cookies.get("authToken")
    if(authToken)
        throw redirect(300, "/")

    return {}
}

async function verifyData(data) {
    const handle = data.get('handle')
    const email = data.get('email')

    const handleRegex = /\w{1,25}/g
    const handleTaken = await users.findOne({ handle: handle })
    const emailTaken = await users.findOne({ email: email })

    if(!(emailTaken === null))
    {
        errorMessage = "This email is connected to an already existing account."
        return false;
    }

    if(!(handleTaken === null))
    {
        errorMessage = "handle already taken."
        return false;
    }

    if(!(handleRegex.test(handle) && handle.length <= 25))
    {
        errorMessage = "Handle doesn't match requirements. It must be at most 25 characters, including letters, digits and special characters."
        return false
    }

    return true
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        const userData = {
            handle: formData.get('handle'),
            username: formData.get('handle'),
            email: formData.get('email'),
            password: formData.get('password'),
            description: `Hi! It's me, ${formData.get('handle')}!`,
            avatar_url: "",
            initials: formData.get('handle').slice(0, 2).toUpperCase(),
            creationDate: new Date()
        }

        const flag = await verifyData(formData)
        if(flag)
        {
            const result = await users.insertOne(userData)
            return {
                variant: "success",
                header: "Your account has been created!",
                message: "Go to the login page and sign in.",
                link: "/login"
            }
        }
        else
        {
            return fail(400, {
                variant: "error",
                header: "Something went wrong.",
                message: errorMessage
            })
        }    
    }
}