import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL);
const dbName = process.env.DB_NAME || "portfolio_db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await client.connect();
      const db = client.db(dbName);
      const messages = db.collection("messages");

      const docs = await messages.find().toArray();
      res.status(200).json(docs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
