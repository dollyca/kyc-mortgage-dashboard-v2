import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Home,
  FileText,
  ListChecks
} from "lucide-react"

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menu = [
    { icon: <Home size={20} />, label: "首頁", path: "/" },
    { icon: <FileText size={20} />, label: "客戶管理", path: "/customers" },
    { icon: <ListChecks size={20} />, label: "KYC表單", path: "/kyc" }
  ]

  return (
    <>
      {/* 💻 桌機版 Sidebar（可折疊） */}
      <div
        className={`hidden md:block h-screen bg-white shadow-lg transition-all duration-300 
          ${isCollapsed ? "w-16 p-2" : "w-40 p-4"}`}
      >
        {/* 🔁 折疊按鈕 */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-500 hover:text-blue-500 transition"
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>

        {/* 📋 功能清單 */}
        <nav className="space-y-4">
          {menu.map((item, idx) => (
            <div
              key={idx}
              title={isCollapsed ? item.label : ""}
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer transition"
            >
              <span className="w-6 text-center">{item.icon}</span>
              <span className={`${isCollapsed ? "hidden" : "inline"} text-sm`}>
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </div>

      {/* 📱 手機版 icon 橫排 bar */}
      <div className="flex md:hidden justify-around bg-white py-2 shadow">
        {menu.map((item, idx) => (
          <button key={idx} title={item.label}>
            {item.icon}
          </button>
        ))}
      </div>
    </>
  )
}
