import { Target } from 'lucide-react';

export default function TipBox({ children }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-purple-50 border-l-4 border-[#7b1fa2] rounded-md shadow-sm">
      <div>
        <p className="font-semibold text-[#4a148c] flex gap-2 items-center">
          <Target className="text-[#7b1fa2] w-5 h-5 flex-shrink-0" />
          <span>Tip</span>
        </p>
        <div className="text-sm text-gray-700 mt-1">{children}</div>
      </div>
    </div>
  );
}