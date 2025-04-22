import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function KpiCard({ title, value }) {
    return (_jsxs("div", { className: "bg-white p-4 rounded-xl shadow text-center", children: [_jsx("h3", { className: "text-sm text-gray-500", children: title }), _jsx("p", { className: "text-2xl font-bold", children: value })] }));
}
