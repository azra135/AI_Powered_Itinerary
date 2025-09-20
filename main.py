from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from dotenv import load_dotenv
import os

from itinerary import router as itinerary_router
from chatbot import router as chatbot_router
from weather_service import WeatherService

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev: allow all, later restrict
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Initialize WeatherService with API key
OPENWEATHER_API_KEY = os.getenv("WEATHER_API_KEY")
weather_service = WeatherService(OPENWEATHER_API_KEY)
print("Loaded API Key:", OPENWEATHER_API_KEY)  # Debugging line

# Register routers
app.include_router(itinerary_router)
app.include_router(chatbot_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to AI Travel Itinerary Demo"}
