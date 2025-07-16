# 📊 Stock Analytics App

A web application for real-time stock analytics built with **Angular** and **NestJS**, powered by the **Tinkoff Invest API**.  
The app features a **modular architecture**, **GraphQL** on both frontend and backend, and tools for searching, tracking, and visualizing financial instruments.

---

## 🧩 Features

- 🔍 **Search by ticker** — instantly find stocks and other financial instruments.
- 📋 **Advanced data tables with AG Grid** — efficient rendering of large tabular datasets with sorting, filtering, and virtual scrolling.
- 📈 **Candlestick chart rendering** — visualize market data with Highcharts.
- 🔄 **Real-time updates** — fetch up-to-date price and volume data.
- 🧭 **GraphQL API and client** — efficient and flexible communication using Apollo GraphQL.
- 🧱 **Modular architecture** — scalable structure for long-term development.
- 🚀 **Optimized Angular frontend** — with `OnPush` strategy, RxJS, and lazy loading.

---

## 🛠 Tech Stack

| Layer          | Technology                          |
|----------------|-------------------------------------|
| Frontend       | Angular, TypeScript, RxJS, GraphQL  |
| Backend        | NestJS, TypeScript, GraphQL         |
| API Provider   | Tinkoff Invest API                  |
| Tables         | AG Grid                             |
| Charts         | Highcharts                          |
| UI Components  | Prime NG                            |
| Architecture   | Modular with feature modules        |

---

## 📸 Screenshots

<img src="/screenshots/01.jpg" alt="Main Page" width="600"/>
<img src="/screenshots/02.jpg" alt="Main Page" width="600"/>
---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Delyaday/tinkoff-analytical-system.git
```

### 2. Install dependencies

#### For Angular frontend:
```bash
cd frontend
npm install
```

#### For NestJS backend:
```bash
cd backend
npm install
```

### 3. Run the app

#### Run backend:
```bash
npm run start:dev
```

#### Run frontend:
```bash
ng serve
```

---

## 📡 API Used

- [Tinkoff Invest API](https://tinkoff.github.io/investAPI/)
- Authorization via personal token

---

## 🧠 Project Structure Highlights

- `/frontend/src/app/features/...` — feature modules for each core area (e.g., `instruments`, `charts`)
- `/backend/src/modules/...` — clean separation of GraphQL resolvers, services, and models
- Reusable shared components and services
- ChangeDetectionStrategy.OnPush and virtual scrolling for performance

---

## 📌 Future Plans

- 💾 Add local storage / database for watchlists
- 🛎 Notifications for stock price changes
- 📊 More complex analytics tools (e.g., indicators, trends)
- 📱 Mobile-friendly layout

---
