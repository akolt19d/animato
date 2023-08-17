import { users } from "$db/users"
import { error } from "@sveltejs/kit"

export async function load({ params }){
    const userId = params.userId   
    const targetUser = await users.findOne({ handle: userId }, {
        projection: {
            _id: 0,
            password: 0,
            email: 0
        }
    })

    if(!targetUser)
        throw error(404, "/")

    return {
        targetUser: targetUser
    }
}