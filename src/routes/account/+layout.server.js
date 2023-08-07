import { redirect } from '@sveltejs/kit'

export async function load({ locals, cookies }) {
    const authToken = cookies.get("authToken")
    if(!authToken)
        throw redirect(302, "/")

    let user = undefined
    if(locals.user)
        user = locals.user
    
    return { user }
}