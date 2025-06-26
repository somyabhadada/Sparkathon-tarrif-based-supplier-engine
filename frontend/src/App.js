import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import TariffChart from "./TariffChart";
import TariffPredictor from "./TariffPredictor";
import { fetchProducts, fetchTariffTrend, bulkPredictTariffs } from "./api";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [tariffTrend, setTariffTrend] = useState([]);

  const generateHeadline = (category) => {
    switch (category.toLowerCase()) {
      case "electronics":
        return "Chip tariffs rise due to trade tension";
      case "groceries":
        return "Grain imports taxed amid inflation";
      case "tools":
        return "No change in tool import policies";
      case "apparel":
        return "Clothing duties may be reduced";
      case "jewelry":
        return "Gold import duties likely to increase";
      default:
        return "Government updates import policy";
    }
  };

  useEffect(() => {
    const loadAndPredict = async () => {
      try {
        const rawProducts = await fetchProducts();
        const headlines = rawProducts.map((p) => generateHeadline(p.category));
        const predictions = await bulkPredictTariffs(headlines);
        const updated = rawProducts.map((p, i) => ({
          ...p,
          prediction: predictions[i],
        }));
        setProducts(updated);
      } catch (err) {
        console.error("Failed to load or predict:", err);
      }
    };

    loadAndPredict();
  }, []);

  const handleProductClick = async (product) => {
    setSelectedProduct(product);
    const trend = await fetchTariffTrend(product.product_id);
    setTariffTrend(trend);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🛒 Walmart Procurify</h1>
      <TariffPredictor />
      <ProductList products={products} onProductClick={handleProductClick} />
      {selectedProduct && (
        <TariffChart data={tariffTrend} product={selectedProduct} />
      )}
    </div>
  );
}

export default App;
