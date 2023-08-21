import { users } from '$db/users'
import { fail, redirect, error } from '@sveltejs/kit'

export const actions = {
    pubInfo: async ({ request, cookies }) => {
        const authToken = cookies.get("authToken")
        if(authToken)
            throw error(404)

        const formData = await request.formData()
        const username = formData.get("username")
        const description = formData.get("description")

        console.log(username, description)
    }
}