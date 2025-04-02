const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017"; // Use 127.0.0.1 instead of localhost for better compatibility
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();

        const db = client.db("mydb"); // Create or connect to "mydb"
        const collection = await db.createCollection("orders"); // Create "customers" collection

        console.log("Collection created!");
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

run();
