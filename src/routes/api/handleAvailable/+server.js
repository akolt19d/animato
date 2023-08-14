import { users } from "$db/users"
import { json } from "@sveltejs/kit"

export async function POST({ request }) {
    const { handle } = await request.json()
    const filteredUser = await users.findOne({ handle: handle })

    if(filteredUser)
        return json(true)
    else
        return json(false)
}