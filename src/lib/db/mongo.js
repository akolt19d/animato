import { MongoClient, ServerApiVersion } from "mongodb"
import { MONGODB_URI } from "$env/static/private"

const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export function startMongo() {
    console.log("Connecting to Mongo...")
    return client.connect()
}

export default client.db()