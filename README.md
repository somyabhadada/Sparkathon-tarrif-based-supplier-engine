# Sparkathon-tarrif-based-supplier-engine
🛒 Tariff-Based Supplier Engine
Smart Procurement Optimization for Walmart Retail Stores





🚀 Project Goal
Help Walmart store managers make smarter procurement decisions by combining:

📈 Real-time tariff trends

🔮 Demand forecasting

🔁 Substitution recommendations

📰 Tariff prediction from news

🧠 Features
🌍 Interactive procurement UI with real Walmart-like product data

📊 Tariff trend visualizations by product

🧾 Intelligent stocking suggestions (Bulk Now / Use Substitute / Don't Stock)

🧠 News-based tariff change predictor (using custom ML logic)

🔎 Inline prediction tags on every product card

🔥 Fully working FastAPI + React full-stack app

🖥️ Frontend (React)
React.js app in /frontend

Fetches product list, tariff data, and predictions from backend

Includes:

Product cards

Tariff chart (Plotly)

News prediction input

Live prediction tags

⚙️ Backend (FastAPI)
REST API using FastAPI (main.py)

Serves:

/products → product list

/tariff_trend/{product_id} → tariff history

/predict_tariff → predicts change from headline text

📁 Project Structure
bash
Copy
Edit
├── main.py                      # FastAPI backend
├── frontend/                    # React frontend
│   └── src/
│       ├── App.js
│       ├── api.js
│       ├── ProductList.jsx
│       └── TariffPredictor.jsx
├── walmart_master_sales_dataset.csv
├── walmart_tariff_trend_dataset.csv
├── requirements.txt
└── README.md
📦 Setup Instructions
🔹 Backend (FastAPI)
bash
Copy
Edit
pip install -r requirements.txt
uvicorn main:app --reload
Visit: http://127.0.0.1:8000/products

🔹 Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm start
Visit: http://localhost:3000

📊 Sample Screenshot
(You can upload UI screenshots here and link them)

🧠 Future Add-ons
ML model using LSTM + news sentiment

Store-level map with Leaflet

Login/role-based access for store managers

Substitution logic using cosine similarity

📜 License
This project is licensed under the MIT License.

🙌 Built for Sparkathon 2025
By Somya Bhadada and team
“Making supply chains smarter, one click at a time.”

