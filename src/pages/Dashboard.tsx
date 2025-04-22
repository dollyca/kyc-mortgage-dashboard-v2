// Dashboard.tsx - 首頁儀表板
// 使用 Layout 統一包住 Sidebar 和 Header
// 包含三個 KPI 卡片 + 一張進度條 + 一張信用圖表

import Layout from "../layout/Layout";
import KpiCard from "../components/KpiCard";
import ProgressBar from "../components/ProgressBar";
import CreditChart from "../components/CreditScoreChart";
import { useState, useEffect } from "react"
import { fetchRepaymentProgress } from "@/services/api"

export default function Dashboard() {
  // ✅ 狀態 State
  const [repaymentProgress, setRepaymentProgress] = useState(0)
  const [loading, setLoading] = useState(true)
  const [selectedMonth, setSelectedMonth] = useState("2025-04")
  const [userId, setUserId] = useState("U001")

  useEffect(() => {
    const loadProgress = async () => {
      setLoading(true)
      const res = await fetchRepaymentProgress(selectedMonth, userId)
      setRepaymentProgress(res.progress)
      setLoading(false)
    }

    loadProgress()
  }, [selectedMonth, userId]) // 👈 有改月份/用戶就 reload

  return (
    <Layout>
      {/* 👇 下拉選單：月份 + 用戶切換 */}
      <div className="flex flex-wrap gap-4 my-4">
        <div>
          <label className="mr-2 font-medium">月份：</label>
          <select
            className="border rounded px-2 py-1"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="2025-04">2025 年 4 月</option>
            <option value="2025-03">2025 年 3 月</option>
            <option value="2025-02">2025 年 2 月</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium">用戶：</label>
          <select
            className="border rounded px-2 py-1"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value="U001">客戶 A</option>
            <option value="U002">客戶 B</option>
          </select>
        </div>
      </div>

      {/* 🔢 KPI 卡片區塊：審核、處理中、今日新增 */}
      <div className="grid grid-cols-3 gap-4">
        <KpiCard title="已審核案件" value="132" />
        <KpiCard title="處理中" value="47" />
        <KpiCard title="今日新增" value="8" />
      </div>

      {/* 📊 資料視覺化區：進度條 + 圖表 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
        <div className="bg-white p-4 rounded-xl shadow lg:col-span-1">
          <h2 className="text-lg font-semibold mb-2">📊 還款進度</h2>
          {loading ? (
            <p className="text-gray-400 italic text-sm">載入中...</p>
          ) : (
            <ProgressBar percentage={repaymentProgress} />
          )}
        </div>

        <div className="bg-white p-4 rounded-xl shadow lg:col-span-3">
          <CreditChart />
        </div>
      </div>
    </Layout>
  )

}
