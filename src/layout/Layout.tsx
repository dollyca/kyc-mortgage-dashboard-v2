import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* 桌機版 Sidebar */}
      <Sidebar />

      <div className="flex-1 bg-gray-100">
        <Header />
        <div className="p-4 sm:p-6 space-y-6">{children}</div>
      </div>
    </div>
  );
}
