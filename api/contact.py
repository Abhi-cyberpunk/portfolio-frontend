from pymongo import MongoClient
import os
import json

MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ["DB_NAME"]

client = MongoClient(MONGO_URL)
db = client[DB_NAME]
messages = db["messages"]

def handler(request, response):
    if request.method == "POST":
        body = request.json()
        messages.insert_one(body)
        return response.json({"success": True, "message": "Saved!"})
    return response.json({"error": "Method not allowed"}, status=405)
