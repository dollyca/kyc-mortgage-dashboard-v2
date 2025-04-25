type KpiCardProps = {
  title: string;
  value: string | number; // ✅ 改成支援數字
};

  
  export default function KpiCard({ title, value }: KpiCardProps) {
    return (
      <div className="bg-white p-4 rounded-xl shadow text-center">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    );
  }
  