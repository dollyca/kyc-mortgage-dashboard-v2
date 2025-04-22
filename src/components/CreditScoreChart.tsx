import ChartDataLabels from "chartjs-plugin-datalabels"
import { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2"
import type { ChartOptions } from "chart.js"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
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
      setLoading(true)
      const res = await fetchCreditScoreDistribution(month, userId)
      setLabels(res.labels)
      setDataSet(res.data)
      setLoading(false)
    }
    loadData()
  }, [month, userId])

  const maxValue = dataSet.length > 0 ? Math.max(...dataSet) : 100

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
  }

  const options: ChartOptions<"bar"> = {
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
        formatter: (value: number) => `${value}人`,
      },
      legend: {
        display: false,
        position: "bottom" as const,
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
