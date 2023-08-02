import { users } from '$db/users'

let errorMessage = ""

async function verifyData(data) {
    const username = data.get('username')
    const email = data.get('email')

    const usernameRegex = /\w{1,25}/g
    const usernameTaken = await users.findOne({ username: username })
    const emailTaken = await users.findOne({ email: email })

    if(!(emailTaken === null))
    {
        errorMessage = "This email is connected to an already existing account."
        return false;
    }

    if(!(usernameTaken === null))
    {
        errorMessage = "Username already taken."
        return false;
    }

    if(!(usernameRegex.test(username) && username.length <= 25))
    {
        errorMessage = "Username doesn't match requirements. It must be at most 25 characters, including letters, digits and special characters."
        return false
    }

    return true
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        const userData = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            avatar_url: ""
        }

        const flag = await verifyData(formData)
        if(flag)
        {
            const result = await users.insertOne(userData)
            return result.acknowledged
        }
        else
        {
            return errorMessage;
        }    
    }
}