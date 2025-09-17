from pymongo import MongoClient
import os, json
from bson import ObjectId

MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ.get("DB_NAME", "portfolio_db")

client = MongoClient(MONGO_URL)
db = client[DB_NAME]
messages = db["messages"]

def handler(request, response):
    if request.method == "GET":
        try:
            docs = list(messages.find())
            for d in docs:
                d["_id"] = str(d["_id"])  # Convert ObjectId to string
            return response.json(docs)
        except Exception as e:
            return response.json({"error": str(e)}, status=500)
    return response.json({"error": "Method not allowed"}, status=405)
