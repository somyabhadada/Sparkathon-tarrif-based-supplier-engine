// TariffPredictor.jsx
import React, { useState } from "react";
import { predictTariffChange } from "./api";

function TariffPredictor() {
  const [headline, setHeadline] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await predictTariffChange(headline);
      setPrediction(result.prediction);
    } catch (err) {
      console.error("Prediction failed", err);
      setPrediction("Error");
    }
  };

  return (
    <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px", maxWidth: "600px" }}>
      <h3>📰 Predict Tariff Change from Headline</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          placeholder="e.g., Government plans to raise import duties"
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>Predict</button>
      </form>
      {prediction && (
        <p><strong>Prediction:</strong> {prediction === "increase" ? "📈 Increase" : prediction === "decrease" ? "📉 Decrease" : "➖ Stable"}</p>
      )}
    </div>
  );
}

export default TariffPredictor;
