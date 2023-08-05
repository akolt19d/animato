import { users } from "$db/users"
import { json } from "@sveltejs/kit"

export async function POST({ request }) {
    const { username } = await request.json()
    const filteredUser = await users.findOne({ username: username })

    if(filteredUser)
        return json(true)
    else
        return json(false)
}