from pymongo import MongoClient
import os, json
from bson import ObjectId

MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ.get("DB_NAME", "portfolio_db")

client = MongoClient(MONGO_URL)
db = client[DB_NAME]
messages = db["messages"]

def handler(request, response):
    if request.method == "PUT":
        try:
            body = request.body.read().decode("utf-8")
            data = json.loads(body)
            msg_id = data.get("id")
            messages.update_one({"_id": ObjectId(msg_id)}, {"$set": {"is_read": True}})
            return response.json({"success": True})
        except Exception as e:
            return response.json({"error": str(e)}, status=500)
    return response.json({"error": "Method not allowed"}, status=405)
