import { jsx as _jsx } from "react/jsx-runtime";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, } from "chart.js";
import { fetchCreditScoreDistribution } from "@/services/api";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);
export default function CreditScoreChart({ month, userId }) {
    const [labels, setLabels] = useState([]);
    const [dataSet, setDataSet] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const res = await fetchCreditScoreDistribution(month, userId);
            setLabels(res.labels);
            setDataSet(res.data);
            setLoading(false);
        };
        loadData();
    }, [month, userId]);
    const maxValue = dataSet.length > 0 ? Math.max(...dataSet) : 100;
    const data = {
        labels,
        datasets: [
            {
                label: "信用等級人數分佈",
                data: dataSet,
                backgroundColor: [
                    "#f87171",
                    "#fbbf24",
                    "#60a5fa",
                    "#10b981",
                    "#a78bfa",
                ],
                borderRadius: 8,
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                anchor: "end",
                align: "top",
                color: "#374151",
                font: {
                    weight: "bold",
                },
                formatter: (value) => `${value}人`,
            },
            legend: {
                display: false,
                position: "bottom",
                labels: {
                    boxWidth: 20,
                    padding: 15,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: maxValue * 1.2,
            },
        },
    };
    return (_jsx("div", { className: "h-[300px] md:h-[400px] w-full flex items-center justify-center", children: loading ? (_jsx("p", { className: "text-sm text-gray-400 italic", children: "\u5716\u8868\u8F09\u5165\u4E2D..." })) : dataSet.every((n) => n === 0) ? (_jsx("p", { className: "text-sm text-red-500 italic", children: "\u26A0\uFE0F \u6C92\u6709\u53EF\u986F\u793A\u7684\u8CC7\u6599" })) : (_jsx(Bar, { data: data, options: options })) }));
}
