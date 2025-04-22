import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import Customers from "./pages/Customers";
import KycForm from "./pages/KycForm";
export default function App() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/customers", element: _jsx(Customers, {}) }), _jsx(Route, { path: "/kyc", element: _jsx(KycForm, {}) })] }) }));
}
