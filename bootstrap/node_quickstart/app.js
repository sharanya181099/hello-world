const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

const uri = "mongodb+srv://sharanyasantosh7:qseNUk8vABMQKxSZ@cluster0.3xrmh1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// GET
app.get("/mymovie", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    const newMovie = {
      title: 'Rise of Sharanya - 24251396',
      year: 2024,
      director:'Sharanya Santosh',
      genres: ['Tech', 'Thriller', 'Drama'],
      rating: 9.7,
    };

    // Insert if not exists
    const existing = await movies.findOne({ title: "Rise of Sharanya - 24251396" });
    if (!existing) {
      const insertResult = await movies.insertOne(newMovie);
      console.log("Inserted document ID:", insertResult.insertedId);
    } else {
      console.log("Document already exists:", existing._id);
    }

    // Query and return
    const movie = await movies.findOne({ title: "Rise of Sharanya - 24251396" });
    res.json(movie); 

  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while accessing the database.");
  } finally {
    await client.close();
  }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
