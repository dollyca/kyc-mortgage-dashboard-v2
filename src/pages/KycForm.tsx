// src/pages/KycForm.tsx
import Layout from "../layout/Layout";

export default function KycForm() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">📝 KYC 表單審核</h1>
      <div className="bg-white p-6 shadow rounded-xl">
        <p>這裡將顯示用戶提交的 KYC 表單細節，以及審核按鈕</p>
        <ul className="list-disc ml-6 mt-4">
          <li>姓名 / 身分證</li>
          <li>地址 / 電話 / 聯絡方式</li>
          <li>上傳的文件</li>
        </ul>
      </div>
    </Layout>
  );
}
