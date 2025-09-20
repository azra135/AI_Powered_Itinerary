import axios from "axios";

class ChatbotService {
  static async askQuestion(question) {
    try {
      const res = await axios.post("http://127.0.0.1:8000/ask", { text: question });
      return res.data.answer;
    } catch (err) {
      console.error("Error asking chatbot:", err);
      throw new Error("Oops! Something went wrong. Please try again.");
    }
  }
}

export default ChatbotService;
