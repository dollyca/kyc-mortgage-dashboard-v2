// src/pages/KycForm.tsx
import Layout from "../layout/Layout"

export default function KycForm() {
  return (
    <Layout>
      <h1 className="text-xl font-semibold mb-4">📝 KYC 表單（模擬）</h1>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">客戶名稱</label>
          <input type="text" className="border rounded w-full p-2" placeholder="請輸入..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">身份證號</label>
          <input type="text" className="border rounded w-full p-2" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">送出</button>
      </form>
    </Layout>
  )
}
