# Sparkathon-tarrif-based-supplier-engine
🛒 Tariff-Based Supplier Engine
Smart Procurement Optimization for Walmart Retail Stores



🚀 Project Overview
Help Walmart store managers make intelligent procurement decisions based on:

📊 Real-time tariff trends
🧠 News-based predictions
🔁 Smart substitutions
📦 Stocking recommendations

Built using FastAPI + React — end-to-end full-stack.
🔗 API Endpoints
Endpoint	Description
/products	Returns list of all products
/tariff_trend/{product_id}	Returns 30-day tariff trend
/predict_tariff (POST)	Predicts tariff change from headline

🧱 Project Structure
📁 Sparkathon-tarrif-based-supplier-engine/
│
├── main.py                        # FastAPI backend
├── requirements.txt              # Backend deps
├── walmart_master_sales_dataset.csv
├── walmart_tariff_trend_dataset.csv
│
├── frontend/                     # React frontend
│   └── src/
│       ├── App.js
│       ├── api.js
│       ├── ProductList.jsx
│       └── TariffPredictor.jsx
│
└── README.md

⚙️ Setup Instructions
✅ Backend (FastAPI)
pip install -r requirements.txt
uvicorn main:app --reload

View products at: http://127.0.0.1:8000/products

✅ Frontend (React)
cd frontend
npm install
npm start
Open in browser: http://localhost:3000

🧠 Features
📦 Product cards with tariff + origin + demand
🧾 Procurement suggestion (bulk/don’t stock/substitute)
📈 Plotly chart of tariff trend per product
📰 Predict tariff movement from headlines
🔁 Inline prediction tags (📈 📉 ➖)

🔮 Future Add-ons
LSTM model trained on news + tariff data
Real-time store selector with map UI
Cosine similarity for substitute matching
Full deployment via Vercel + Render

👨‍💻 Authors
Somya Bhadada (@somyabhadada)
For Sparkathon 2025 – Walmart Supply Chain Challenge






