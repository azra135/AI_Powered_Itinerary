from fastapi import APIRouter
import random
from models.itinerary_request import ItineraryRequest, ItineraryResponse

router = APIRouter()

@router.post("/itinerary", response_model=ItineraryResponse)
def generate_itinerary(request: ItineraryRequest):
    activities = [
        "City Tour", "Museum Visit", "Food Walk", "Beach Day",
        "Hiking", "Shopping", "Local Market", "Cultural Show"
    ]

    plan = []
    for day in range(1, request.days + 1):
        activity = random.choice(activities)
        plan.append(f"Day {day}: {activity} in {request.destination}")

    return ItineraryResponse(plan=plan)
