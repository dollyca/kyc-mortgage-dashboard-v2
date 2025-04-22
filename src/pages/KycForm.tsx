// src/pages/KycForm.tsx
import { useState } from "react"
import Layout from "../layout/Layout"

export default function KycForm() {
  const [name, setName] = useState("")
  const [idNumber, setIdNumber] = useState("")

  return (
    <Layout>
      <h1 className="text-xl font-semibold mb-4">📝 KYC 表單（模擬）</h1>
      <form
        className="space-y-4 max-w-md"
        onSubmit={(e) => {
          e.preventDefault() // ✅ 阻止跳轉
          alert("表單已送出（純展示，未實際提交）")
        }}
      >
        <div>
          <label className="block text-sm font-medium mb-1">客戶名稱</label>
          <input
            type="text"
            className="border rounded w-full p-2"
            placeholder="請輸入..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">身份證號</label>
          <input
            type="text"
            className="border rounded w-full p-2"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          送出
        </button>
      </form>
    </Layout>
  )
}
