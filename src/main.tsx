import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Customers from "./pages/Customers"
import KycForm from "./pages/KycForm"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/kyc" element={<KycForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
