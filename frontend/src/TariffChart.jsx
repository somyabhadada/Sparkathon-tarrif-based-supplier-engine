import React from "react";
import Plot from "react-plotly.js";

function TariffChart({ data, product }) {
  if (!data || data.length === 0) return null;

  const dates = data.map((d) => d.date);
  const rates = data.map((d) => d.tariff_rate);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>📈 Tariff Trend for: {product.product_name}</h2>
      <Plot
        data={[
          {
            x: dates,
            y: rates,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
          },
        ]}
        layout={{
          width: 720,
          height: 400,
          title: "Tariff Rate (%) Over Time",
          xaxis: { title: "Date" },
          yaxis: { title: "Tariff Rate (%)" },
        }}
      />
    </div>
  );
}

export default TariffChart;
