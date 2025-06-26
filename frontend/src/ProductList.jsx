import React from "react";

function ProductList({ products, onProductClick }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>📦 Product Recommendations</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.slice(0, 20).map((product) => (
          <div
            key={product.product_id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "250px",
              cursor: "pointer",
              backgroundColor: "#f9f9f9",
            }}
            onClick={() => onProductClick(product)}
          >
            <h3>{product.product_name}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Store:</strong> {product.store_id}</p>
            <p><strong>Origin:</strong> {product.origin_country}</p>
            <p><strong>Base Price:</strong> ${product.base_price}</p>
            <p><strong>Tariff:</strong> {product.current_tariff}%</p>
            {product.prediction && (
              <p>
                <strong>Prediction:</strong>{" "}
                {product.prediction === "increase"
                  ? "📈 Likely Increase"
                  : product.prediction === "decrease"
                  ? "📉 Likely Decrease"
                  : "➖ Stable"}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
