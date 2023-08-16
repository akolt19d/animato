import { users } from "$db/users"
import { error } from "@sveltejs/kit"

export async function load({ params }){
    const userId = params.userId   
    const targetUser = await users.findOne({ handle: userId }, {
        projection: {
            _id: 0,
            username: 1,
            avatar_url: 1,
            initials: 1
        }
    })

    if(!targetUser)
        throw error(404, "/")

    return {
        targetUser: targetUser
    }
}