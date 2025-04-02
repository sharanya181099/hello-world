const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
   
        const db = client.db("mydb");
        const collection = db.collection("customers");

        const myquery = { age: "24" }; 
        const newvalues = { $set: { name: "Catherine", age: "25" } }; 

        const result = await collection.updateOne(myquery, newvalues); 

        console.log("1 document updated", result);
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

run();
