import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
export default function Layout({ children }) {
    return (_jsxs("div", { className: "flex flex-col md:flex-row min-h-screen", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "flex-1 bg-gray-100", children: [_jsx(Header, {}), _jsx("div", { className: "p-4 sm:p-6 space-y-6", children: children })] })] }));
}
