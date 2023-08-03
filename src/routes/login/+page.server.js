import { users } from "$db/users";
import { fail, redirect } from "@sveltejs/kit";
import jwt from 'jsonwebtoken'
import { RSA_KEY } from "$env/static/private"

export async function load({ cookies }) {
    const authToken = cookies.get("authToken")
    if(!authToken)
        return {clearUser: true}
    else throw redirect(300, "/")
}

export const actions = {
    default: async({ cookies, request }) => {
        const formData = await request.formData()
        const loginData = {
            email: await formData.get("email"),
            password: await formData.get("password")
        }

        const user = await users.findOne({email: loginData.email})
        if(loginData.password == user.password)
        {
            const userAttemptingLogin = {
                username: user.username,
                email: user.email,
                avatar_url: user.avatar_url
            }
            const authToken = jwt.sign({user: userAttemptingLogin}, RSA_KEY, {expiresIn: "24h"})

            cookies.set("authToken", authToken, { httpOnly: true, maxAge: 3600 * 24 , sameSite: "strict" })

            throw redirect(302, "/")
        }
        else {
            return fail(400, {
                variant: "error",
                header: "Error",
                message: "Incorrect login data."
            })
        }
    }
}