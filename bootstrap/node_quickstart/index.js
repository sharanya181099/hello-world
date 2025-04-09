const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://sharanyasantosh7:qseNUk8vABMQKxSZ@cluster0.3xrmh1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db('sample_mflix');
        const movies = database.collection('movies');
    
        const newMovie = {
          title: 'Rise of Sharanya - 24251396',
          year: 2024,
          director: 'Sharanya Santosh',
          genres: ['Tech', 'Thriller', 'Drama'],
          rating: 9.7
        };
    
        // Task 1. Insertion (Avoid duplicate insertions)
        const existing = await movies.findOne({ title: 'Rise of Sharanya - 24251396' });
        if (!existing) {
          const insertResult = await movies.insertOne(newMovie); 
          console.log('Inserted document ID: ', insertResult.insertedId);
        } else {
          console.log('Document already exists:', existing._id);
        }
    
        // Task 2: Query the movie
        const query = { title: 'Rise of Sharanya - 24251396' };
        const movie = await movies.findOne(query);
        console.log('Queried movie:', movie);
    
      } finally {
        await client.close();
      }
  
}
run().catch(console.dir);