# 🏠 KYC Mortgage Dashboard

A responsive React + TypeScript dashboard designed to visualize key credit and repayment metrics for mortgage clients.  
The project simulates real-world data handling using mock APIs, with dynamic visual updates based on selected client and month.

---

## Features

- ✅ Dynamic credit score distribution chart (Chart.js)
- ✅ Repayment progress bar with mock API data
- ✅ Filter by month and user (client)
- ✅ Full mock API integration (simulated backend logic)
- ✅ Loading states and empty data prompts for smooth UX
- ✅ Responsive layout (grid-based for desktop, tablet, and mobile)

---

## 🧱 Modular Architecture Overview

This project follows a clean, modular architecture for scalability and maintainability.  
All business logic, API calls, and UI rendering are clearly separated by responsibility:

### 📂 Folder Structure Highlights

| Folder                      | Purpose                                       |
|-----------------------------|-----------------------------------------------|
| `_refactor/hooks/`          | Handles state logic (e.g., filter, data fetch)|
| `_refactor/services/`       | Simulated APIs (KPI, repayment, credit score) |
| `_refactor/components/`     | Display components (e.g., chart, progress bar)|
| `_refactor/components/ui/`  | Generic UI elements (e.g., Card)              |
| `Dashboard.tsx`             | Central layout & logic assembly               |

---

### 🔌 Core Hooks

| Hook              | Description                          |
|-------------------|--------------------------------------|
| `useFilter`        | Manages selected month & user        |
| `useKPI`           | Fetches KPI metrics (approved, etc.) |
| `useRepayment`     | Fetches repayment progress %         |
| `useCreditChart`   | Fetches chart data & labels          |

---

### 🛠️ Mock Service Functions

| Function                      | Purpose                                |
|-------------------------------|----------------------------------------|
| `fetchCreditData`| Returns credit level distribution data |
| `fetchRepayment`      | Returns repayment percentage           |
| `fetchKPIStats`               | Returns simulated KPI values           |

---

## 📊 Dashboard Structure

Below is how modular components are structured within the page:

- `Dashboard.tsx`: Main layout with dropdown filters, KPI cards, progress bar, and chart
- `CreditChart.tsx`: Chart.js bar chart accepting props (data + labels)
- `ProgressBar.tsx`: Visual component showing repayment percent
- `api.ts`: Simulated data provider for each feature
- `Card.tsx`: UI container used for KPI cards & chart blocks

---

## 📁 Sample Screenshot

### 🖥️ Desktop View  
<img src="/dashboard-desktop.png" alt="Desktop Dashboard Preview" width="100%"/>

### 📱 Mobile View  
<img src="/dashboard-mobile.png" alt="Mobile Dashboard Preview" width="50%"/>

---

## 🧪 Tech Stack

- React + TypeScript + Vite
- Tailwind CSS for layout
- Chart.js + react-chartjs-2
- Modular Hooks & Service-based architecture

---

## 🚀 Future Improvements

- [ ] Real API integration
- [ ] Authentication & user login
- [ ] KPI trend comparison over time
