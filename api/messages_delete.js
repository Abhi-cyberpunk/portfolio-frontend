import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL);
const dbName = process.env.DB_NAME || "portfolio_db";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const { id } = req.body;

      await client.connect();
      const db = client.db(dbName);
      const messages = db.collection("messages");

      await messages.deleteOne({ _id: new ObjectId(id) });

      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
