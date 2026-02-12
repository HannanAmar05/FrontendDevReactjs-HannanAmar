import { FaStar } from "react-icons/fa";

const Star = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((index) => {
        const fillPercentage =
          Math.min(Math.max(rating - index, 0), 1) * 100;

        return (
          <div key={index} className="relative inline-block">
            <FaStar className="text-gray-300" size={18} />
            <div
              className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
              style={{ width: `${fillPercentage}%` }}
            >
              <FaStar className="text-yellow-400" size={18} />
            </div>
          </div>
        );
      })}
      <span className="ml-2 text-sm font-black text-gray-700">{rating}</span>
    </div>
  );
};

export default Star;
