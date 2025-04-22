import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ProgressBar({ percentage }) {
    return (_jsxs("div", { children: [_jsx("div", { className: "w-full bg-gray-200 rounded-full h-4", children: _jsx("div", { className: "bg-green-500 h-4 rounded-full", style: { width: `${percentage}%` } }) }), _jsxs("p", { className: "text-sm mt-1 text-right text-gray-500", children: [percentage, "% \u5B8C\u6210"] })] }));
}
