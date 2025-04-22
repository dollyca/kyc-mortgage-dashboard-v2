type ProgressProps = {
    percentage: number;
  };
  
  export default function ProgressBar({ percentage }: ProgressProps) {
    return (
      <div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-sm mt-1 text-right text-gray-500">{percentage}% 完成</p>
      </div>
    );
  }
  