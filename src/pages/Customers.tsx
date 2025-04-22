import Layout from "../layout/Layout";

export default function Customers() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">👥 Customers Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded-xl">客戶數據統計</div>
        <div className="bg-white p-4 shadow rounded-xl">客戶互動紀錄</div>
      </div>
    </Layout>
  );
}
