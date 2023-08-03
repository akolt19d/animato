import { startMongo } from "$db/mongo";
import jwt from "jsonwebtoken"
import { RSA_KEY } from "$env/static/private"
import { users } from "$db/users"

startMongo().then(() => { console.log("Connected!") })

export async function handle({ event, resolve }) {
    const authToken = event.cookies.get("authToken")
    try {
        if(!authToken)
            event.locals.user = undefined
        
        const claims = jwt.verify(authToken, RSA_KEY)

        if(!claims)
            event.locals.user = undefined

        if(authToken && claims) {
            const user = await users.findOne({ email: claims.user.email })
            const userData = {
                username: user.username,
                email: user.email,
                avatar_url: user.avatar_url
            }
            event.locals.user = userData
        }
    } finally {
        const response = await resolve(event)
        return response
    }
}