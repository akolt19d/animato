import { users } from '$db/users'

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        const userData = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            avatar_url: ""
        }

        const result = await users.insertOne(userData)

        return result.acknowledged
    }
}