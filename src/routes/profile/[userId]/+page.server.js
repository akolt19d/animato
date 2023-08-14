import { users } from "$db/users"
import { redirect } from "@sveltejs/kit"

export async function load({ params }){
    const userId = params.userId   
    const targetUser = await users.findOne({ username: userId }, {
        projection: {
            _id: 0,
            username: 1,
            avatar_url: 1,
            initials: 1
        }
    })

    if(!targetUser)
        throw redirect(302, "/")

    return {
        targetUser: targetUser
    }
}