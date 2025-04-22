// src/pages/Customers.tsx
import Layout from "../layout/Layout"

export default function Customers() {
  return (
    <Layout>
      <h1 className="text-xl font-semibold mb-4">📋 客戶清單</h1>
      <ul className="space-y-2">
        <li className="bg-white p-4 rounded shadow">客戶 A（userId: U001）</li>
        <li className="bg-white p-4 rounded shadow">客戶 B（userId: U002）</li>
        <li className="bg-white p-4 rounded shadow">客戶 C（未開放）</li>
      </ul>
    </Layout>
  )
}
