const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(url);

async function joinCollections() {
    try {
        await client.connect();

        const db = client.db("mydb");
        const ordersCollection = db.collection("orders");
        const result = await ordersCollection.aggregate([
            {
                $lookup: {
                    from: "products",          
                    localField: "product_id",  
                    foreignField: "_id",       
                    as: "orderdetails"        
                }
            }
        ]).toArray();

        console.log("Join Result:");
        console.log(JSON.stringify(result, null, 2)); 

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close(); 
    }
}

joinCollections();
