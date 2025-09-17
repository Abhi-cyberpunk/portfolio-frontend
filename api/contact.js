import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL);
const dbName = process.env.DB_NAME || "portfolio_db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      await client.connect();
      const db = client.db(dbName);
      const messages = db.collection("messages");

      await messages.insertOne({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        is_read: false,
        created_at: new Date()
      });

      res.status(200).json({ success: true, message: "Saved!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
