// src/components/CreditScoreChart.tsx
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js"
import { fetchCreditScoreDistribution } from "@/services/api"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels)

interface Props {
    month: string
    userId: string
}

export default function CreditScoreChart({ month, userId }: Props) {
    const [labels, setLabels] = useState<string[]>([])
    const [dataSet, setDataSet] = useState<number[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            setLoading(true)  //新增 loading 狀態
            const res = await fetchCreditScoreDistribution(month, userId)
            setLabels(res.labels)
            setDataSet(res.data)
            setLoading(false)  //新增 loading 狀態
        }
        loadData()
    }, [month, userId])

    const data = {
        labels,
        datasets: [
            {
                label: "信用等級人數分佈",
                data: dataSet,
                backgroundColor: [
                    "#f87171",  // Poor
                    "#fbbf24",  // Fair
                    "#60a5fa",  // Good
                    "#10b981",  // Very Good
                    "#a78bfa",  // Excellent
                ],
                borderRadius: 8,
            },
        ],
    }

    const maxValue = dataSet.length > 0 ? Math.max(...dataSet) : 100
    const options = {
        responsive: true,
        maintainAspectRatio: false as const,
        plugins: {
            datalabels: {
                anchor: "end",
                align: "top",
                color: "#374151",
                font: {
                    weight: "bold" as const,
                },
                formatter: (value: number) => `${value}人`,
            },
            legend: {
                display: false, // 完全隱藏 legend
                position: "bottom", // 位置放下邊
                labels: {
                    boxWidth: 20,
                    padding: 15,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: maxValue * 1.2, // 根據最大值多預留 20%
            },
        }
    }


    return (
        <div className="h-[300px] md:h-[400px] w-full flex items-center justify-center">
            {loading ? (
                <p className="text-sm text-gray-400 italic">圖表載入中...</p>
            ) : dataSet.every((n) => n === 0) ? (
                <p className="text-sm text-red-500 italic">⚠️ 沒有可顯示的資料</p>
            ) : (
                <Bar data={data} options={options} />
            )}
        </div>
    )

}
