# 👉 [🔗 Live Demo](https://kyc-mortgage-dashboard-v2.vercel.app/)

---

# 🏠 KYC Mortgage Dashboard V2

This is the **V2 refactored version** of my original KYC Mortgage Dashboard project.

V2 focuses on:
- ✅ **Modular hooks** architecture
- ✅ **Cleaner component structure**
- ✅ **Better data flow and separation of concerns**
- ✅ **Improved maintainability and scalability**
- ✅ Ready for integration with real backend APIs

---

## 💡 Key Features

- 🧩 Modular hooks: `useFilter`, `useKPI`, `useRepayment`, `useCreditChart`
- 📊 KPI cards with dynamic data (Approved, Pending, New Cases)
- 📈 Repayment progress bar (with loading state)
- 📉 Credit score distribution chart (Chart.js + Datalabels)
- 📅 Month & user filter (local state control)
- 🧼 TypeScript + Tailwind CSS + Vite setup
- 💡 Simple mock API (`services/api.ts`) simulating async fetch

---

## 🗂️ Project Structure

src/ ├── components/ # UI Components (Card, Chart, etc.) ├── hooks/ # Custom hooks for each data logic ├── layout/ # Page layout (Sidebar + Header) ├── pages/ # Main pages (Dashboard, Clients, etc.) ├── services/ # Mock APIs ├── styles/ # Tailwind / global styles


---

## ⚙️ Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- Chart.js 4 + chartjs-plugin-datalabels
- Vite
- Vitest (optional unit test setup)
- Deployed on [Vercel](https://vercel.com)

---

## 🛠️ Roadmap (Next)

- [ ] Integrate with real API backend (FastAPI/Supabase)
- [ ] Add authentication (login + access control)
- [ ] Add unit tests (Vitest + React Testing Library)
- [ ] Improve responsive layout for mobile
- [ ] Add filter persistence (localStorage or URL params)

---

## ✍️ Author

Made by Dolly  
[GitHub @dollyca](https://github.com/dollyca)

---
