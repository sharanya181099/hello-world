const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();

        const db = client.db("mydb");
        const collection = db.collection("orders");

        const myobj = [
            { _id: 1, product_id: 154, status: 1 }
          ];

        const result = await collection.insertMany(myobj);

        console.log("Number of documents inserted:", result.insertedCount);
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

run();
