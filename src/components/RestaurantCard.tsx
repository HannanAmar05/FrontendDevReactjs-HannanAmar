import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../utils/apiEndpoint";
import type { RestaurantCardProps } from "../utils/type";
import Star from "./Star";
import { formatIDR } from "../utils/formatPrice";

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate(`/detail/${restaurant.id}`);
  };

  return (
    <div
      onClick={handleLearnMore}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Part */}
      <div className="relative h-56">
        <img
          src={`${API_ENDPOINT.image(restaurant.pictureId)}`}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          alt="Restaurant"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-black shadow-lg">
          ⭐ {restaurant.rating}
        </div>
      </div>

      {/* Content Part */}
      <div className="p-6">
        <div className="flex text-yellow-400 mb-2">
          {/* Star Icons */}
          <Star rating={restaurant.rating} />
          {/* <span className="text-gray-300">★</span> */}
        </div>

        <h4 className="text-xl font-bold text-gray-800 mb-2">
          {restaurant.name}
        </h4>

        <div className="flex justify-between text-sm text-gray-500 space-y-1 font-medium">
          <div className="flex gap-2">
            <span>{restaurant.city}</span>
            <span>•</span>
            <span>{formatIDR(restaurant.price)}</span>
          </div>
          <div>
            <span
              className={` text-white text-[10px] font-black px-3 py-1.5 rounded-md ${!restaurant.isOpen ? "bg-red-500" : "bg-[#10B981]"}`}
            >
              {restaurant.isOpen ? "Open Now" : "Closed"}
            </span>
          </div>
        </div>

          <button
            onClick={handleLearnMore}
            className="bg-blue-600 w-full mt-4 hover:bg-blue-700 text-white text-xs font-bold px-4 py-4 rounded-lg transition shadow-md"
          >
            LEARN MORE
          </button>

      </div>
    </div>
  );
};

export default RestaurantCard;
