export async function load({locals}) {
    let user = undefined
    if(locals.user)
        user = locals.user
    
    return { user }
}