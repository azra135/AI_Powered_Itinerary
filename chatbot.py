from fastapi import APIRouter
import os
from dotenv import load_dotenv
from chatbot_service import ChatbotService
from models.chat_request import ChatRequest

router = APIRouter()

# load .env file so os.getenv works
load_dotenv()

api_key = os.getenv("WEATHER_API_KEY")
print("Loaded WEATHER_API_KEY:", api_key)   # debug check

chatbot_service = ChatbotService(api_key)

@router.post("/ask")
def ask_chatbot(request: ChatRequest):
    return {"answer": chatbot_service.ask(request.text)}
