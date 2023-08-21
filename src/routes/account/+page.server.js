import { users } from '$db/users'
import { fail, redirect, error } from '@sveltejs/kit'

function verifyData(username, description) {
    if(username.length == 0 || description.length == 0)
        return false

    if(username.length > 25 || description.length > 50)
        return false

    return true
}

export const actions = {
    pubInfo: async ({ request, cookies, locals }) => {
        const authToken = cookies.get("authToken")
        if(!authToken)
            throw error(404)

        const { user } = locals
        const formData = await request.formData()
        const username = formData.get("username")
        const description = formData.get("description")

        const flag = verifyData(username, description)

        if(flag) {
            const result = await users.updateOne({ handle: user.handle }, { 
                $set: {
                    username: username,
                    description: description
                }
             })
    
             return {
                variant: "success",
                header: "Your data has been changed."
            }
        }
        else {
            return fail(400, {
                variant: "error",
                header: "Something went wrong.",
                message: "Check if the data you inputed is valid."
            })
        }
    }
}