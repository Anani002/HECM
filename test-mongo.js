// filepath: e:\Archives-HECM\test-mongo.js
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ananijasper:felixmanonlyboy@archives-hecm.nd1izqh.mongodb.net/?retryWrites=true&w=majority&appName=Archives-HECM";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);