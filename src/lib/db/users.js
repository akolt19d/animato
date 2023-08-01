import { db } from "$db/mongo"

export const users = db.collection("users")