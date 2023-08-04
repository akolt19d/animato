import { redirect } from '@sveltejs/kit'

export async function load({cookies}){
    cookies.set("authToken", "", { maxAge: 0 })
    throw redirect(302, "/login")
}