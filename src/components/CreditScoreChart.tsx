import ChartDataLabels from "chartjs-plugin-datalabels"
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

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels)

interface Props {
  labels: string[]
  dataSet: number[]
}

export default function CreditScoreChart({ labels, dataSet }: Props) {
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
    scales: {
      y: {
        beginAtZero: true,
        max: maxValue + 10,
      },
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: (value) => value,
        font: {
          weight: "bold",
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y}`
          },
        },
      },
    },
  }

  return (
    <div className="h-[300px] md:h-[400px] w-full flex items-center justify-center">
      {dataSet.length === 0 ? (
        <p className="text-sm text-red-500 italic">⚠️ 沒有可顯示的資料</p>
      ) : (
        <Bar data={data} options={options} />
      )}
    </div>
  )
}
