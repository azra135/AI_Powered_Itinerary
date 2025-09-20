import React, { useState } from "react";
import axios from "axios";
import ItineraryDisplay from "./ItineraryDisplay";

function ItineraryForm() {
  const [destination, setCity] = useState("");
  const [days, setDays] = useState(1);
  const [budget, setBudget] = useState(1000);
  const [plan, setPlan] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/itinerary", {
        destination,               
        days: parseInt(days),
        budget: parseFloat(budget),
      });
      setPlan(res.data.plan);
    } catch (error) {
      console.error("Error fetching itinerary", error);
    }
  };

  return (
    <div>
      <h2>Create Itinerary</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />
        <button type="submit">Generate</button>
      </form>

      <ItineraryDisplay plan={plan} />
    </div>
  );
}

export default ItineraryForm;
