# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from typing import List
from pydantic import BaseModel

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

PRODUCTS_PATH = os.path.join(BASE_DIR, "walmart_master_sales_dataset.csv")
TARIFF_PATH = os.path.join(BASE_DIR, "walmart_tariff_trend_dataset.csv")

print("📂 Looking for:", PRODUCTS_PATH)
print("📂 Looking for:", TARIFF_PATH)

products_df = pd.read_csv(PRODUCTS_PATH)
print("✅ Loaded products:", len(products_df))

tariff_df = pd.read_csv(TARIFF_PATH)
print("✅ Loaded tariff:", len(tariff_df))

# Models
class Product(BaseModel):
    product_id: str
    product_name: str
    category: str
    origin_country: str
    store_id: str
    weekly_sales: int
    base_price: float
    current_tariff: float
    stock_quantity: int
    demand_score: float
    substitute_ids: str

class TariffTrend(BaseModel):
    date: str
    product_id: str
    origin_country: str
    tariff_rate: float

class PredictionInput(BaseModel):
    headline: str

class PredictionOutput(BaseModel):
    headline: str
    prediction: str

# Endpoints
@app.get("/products", response_model=List[Product])
def get_products():
    return products_df.rename(columns={"current_tariff (%)": "current_tariff"}).to_dict(orient="records")

@app.get("/tariff_trend/{product_id}", response_model=List[TariffTrend])
def get_tariff_trend(product_id: str):
    filtered = tariff_df[tariff_df["product_id"] == product_id]
    return filtered.to_dict(orient="records")

@app.post("/predict_tariff", response_model=PredictionOutput)
def predict_tariff_change(input: PredictionInput):
    text = input.headline.lower()
    # Basic sentiment simulation
    if "increase" in text or "raise" in text:
        label = "increase"
    elif "cut" in text or "reduce" in text:
        label = "decrease"
    else:
        label = "stable"
    return {"headline": input.headline, "prediction": label}


