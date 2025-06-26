# 🛒 Sparkathon Tariff-Based Supplier Engine

<div align="center">
  <img src="https://img.shields.io/badge/Built%20with-FastAPI-009688?style=for-the-badge&logo=fastapi" alt="FastAPI">
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Challenge-Walmart%20Supply%20Chain-0071CE?style=for-the-badge&logo=walmart" alt="Walmart">
  <img src="https://img.shields.io/badge/Event-Sparkathon%202025-FF6B6B?style=for-the-badge" alt="Sparkathon 2025">
</div>

---

## 🎯 **Smart Procurement Optimization for Walmart Retail Stores**

> *Revolutionizing supply chain decisions with AI-powered tariff intelligence*

Transform how Walmart store managers make procurement decisions through intelligent analysis of tariff trends, market predictions, and smart product substitutions. Our full-stack solution combines real-time data processing with intuitive visualization to optimize inventory management.

---

## 🚀 **Project Overview**

Our intelligent procurement engine empowers Walmart store managers with data-driven insights:

### 🔍 **Core Intelligence Features**
- **📊 Real-time Tariff Trends** - Monitor 30-day tariff movements across products
- **🧠 News-Based Predictions** - AI-powered tariff forecasting from market headlines
- **🔁 Smart Substitutions** - Intelligent product replacement recommendations
- **📦 Stocking Recommendations** - Optimized inventory decisions (bulk/don't stock/substitute)

### 🛠️ **Technology Stack**
- **Backend**: FastAPI (Python) - High-performance async API
- **Frontend**: React.js - Modern, responsive user interface
- **Data Processing**: Pandas, NumPy - Advanced analytics
- **Visualization**: Plotly - Interactive charts and graphs
- **Deployment Ready**: Full-stack architecture for production

---

## 🔗 **API Endpoints**

<table>
<thead>
<tr>
<th>🌐 Endpoint</th>
<th>📝 Description</th>
<th>🔧 Method</th>
<th>📊 Response</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>/products</code></td>
<td>Retrieve comprehensive product catalog</td>
<td>GET</td>
<td>JSON array of all products with tariff data</td>
</tr>
<tr>
<td><code>/tariff_trend/{product_id}</code></td>
<td>30-day historical tariff analysis</td>
<td>GET</td>
<td>Time-series tariff data for visualization</td>
</tr>
<tr>
<td><code>/predict_tariff</code></td>
<td>AI-powered tariff prediction engine</td>
<td>POST</td>
<td>Tariff movement forecast from news headlines</td>
</tr>
</tbody>
</table>

---

## 🧱 **Project Architecture**

```
📁 Sparkathon-tarrif-based-supplier-engine/
│
├── 🔧 main.py                           # FastAPI backend server
├── 📋 requirements.txt                  # Python dependencies
├── 📊 walmart_master_sales_dataset.csv  # Sales data repository
├── 📈 walmart_tariff_trend_dataset.csv  # Tariff trends database
│
├── 🎨 frontend/                         # React frontend application
│   └── src/
│       ├── 🏠 App.js                    # Main application component
│       ├── 🔌 api.js                    # API integration layer
│       ├── 📦 ProductList.jsx           # Product catalog interface
│       └── 🔮 TariffPredictor.jsx       # AI prediction dashboard
│
└── 📖 README.md                         # Project documentation
```

---

## ⚙️ **Quick Start Guide**

### 🏃‍♂️ **Backend Setup (FastAPI)**

```bash
# Install dependencies
pip install -r requirements.txt

# Launch development server
uvicorn main:app --reload

# 🌐 Access API documentation at: http://127.0.0.1:8000/docs
# 📦 View products at: http://127.0.0.1:8000/products
```

### 🎨 **Frontend Setup (React)**

```bash
# Navigate to frontend directory
cd frontend

# Install Node.js dependencies
npm install

# Start development server
npm start

# 🌐 Open application: http://localhost:3000
```

---

## 🌟 **Key Features**

<div align="center">

### 📊 **Intelligent Dashboard**
Product cards displaying tariff rates, country of origin, and demand metrics

### 🎯 **Smart Recommendations**
AI-driven procurement suggestions: bulk purchase, avoid stocking, or find substitutes

### 📈 **Interactive Analytics**
Real-time Plotly charts showing 30-day tariff trends per product

### 🔮 **Predictive Intelligence**
Forecast tariff movements from market news and headlines

### 🏷️ **Visual Indicators**
Intuitive prediction tags: 📈 (increase), 📉 (decrease), ➖ (stable)

</div>

---

## 🚀 **Future Roadmap**

<table>
<thead>
<tr>
<th>🔮 Feature</th>
<th>📝 Description</th>
<th>🎯 Impact</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>🧠 LSTM Neural Networks</strong></td>
<td>Advanced ML model trained on news sentiment + tariff correlations</td>
<td>Higher prediction accuracy</td>
</tr>
<tr>
<td><strong>🗺️ Geographic Intelligence</strong></td>
<td>Real-time store selector with interactive map interface</td>
<td>Location-based optimization</td>
</tr>
<tr>
<td><strong>🔍 Smart Substitutions</strong></td>
<td>Cosine similarity algorithms for product replacement matching</td>
<td>Better inventory alternatives</td>
</tr>
<tr>
<td><strong>☁️ Cloud Deployment</strong></td>
<td>Full production deployment via Vercel (frontend) + Render (backend)</td>
<td>Scalable enterprise solution</td>
</tr>
</tbody>
</table>

---

## 📊 **Sample Data Insights**

Our engine processes comprehensive datasets including:

- **🛍️ Walmart Master Sales Dataset**: Historical sales patterns and product performance
- **📈 Tariff Trend Dataset**: Real-time tariff movements across international suppliers
- **📰 News Analytics**: Market sentiment analysis for predictive modeling

---

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. **🍴 Fork** the repository
2. **🌟 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **💾 Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **📤 Push** to the branch (`git push origin feature/amazing-feature`)
5. **📝 Open** a Pull Request

---

## 👨‍💻 **Team**

<div align="center">

### **Somya Bhadada** 
*Full-Stack Developer & AI Engineer*

[![GitHub](https://img.shields.io/badge/GitHub-@somyabhadada-181717?style=for-the-badge&logo=github)](https://github.com/somyabhadada)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/somyabhadada)

---

### 🏆 **Sparkathon 2025 - Walmart Supply Chain Challenge**

*Empowering retail excellence through intelligent supply chain optimization*

</div>

---

<div align="center">
  <sub>Built with ❤️ for Walmart's future of intelligent retail</sub>
</div>
