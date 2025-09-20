from weather_service import WeatherService

class ChatbotService:
    def __init__(self, api_key: str):
        self.weather_service = WeatherService(api_key)

    def ask(self, user_text: str) -> str:
        user_text = user_text.lower()

        if "weather" in user_text:
            if "in" in user_text:
                city = user_text.split("in")[-1].strip()
                return self.weather_service.get_weather(city)
            else:
                return "Please specify a city, e.g., 'weather in Delhi'."

        return "I'm still learning. Try asking about weather in a city!"
