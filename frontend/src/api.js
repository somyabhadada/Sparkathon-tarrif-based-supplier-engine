import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const fetchProducts = async () => {
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data;
};

export const fetchTariffTrend = async (product_id) => {
  const res = await axios.get(`${BASE_URL}/tariff_trend/${product_id}`);
  return res.data;
};

export const predictTariffChange = async (headline) => {
  const res = await axios.post(`${BASE_URL}/predict_tariff`, { headline });
  return res.data;
};
export const bulkPredictTariffs = async (headlines) => {
  const results = await Promise.all(
    headlines.map((headline) =>
      predictTariffChange(headline).then((res) => res.prediction)
    )
  );
  return results;
};

