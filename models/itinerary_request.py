from pydantic import BaseModel

class ItineraryRequest(BaseModel):
    destination: str
    days: int
    budget: float

class ItineraryResponse(BaseModel):
    plan: list[str]
