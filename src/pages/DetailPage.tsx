import {
  FaStar,
  FaMapMarkerAlt,
  FaRegClock,
  FaChevronLeft,
  FaUtensils,
  FaGlassMartiniAlt,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../utils/apiEndpoint";
import { useGetDetailRestaurant } from "../services/get-detail-restaurant";
import { formatIDR } from "../utils/formatPrice";

const DetailPage = () => {
  const { id } = useParams();
  const {
    data: selectedRestaurant,
    isLoading,
  } = useGetDetailRestaurant(id as string);

  if (isLoading && !selectedRestaurant) {
    return (
      <div className="h-screen flex items-center justify-center text-5xl">
        Loading...
      </div>
    );
  }

  if(!selectedRestaurant) {
    return (
      <div className="h-screen flex items-center justify-center text-5xl text-red-500">
        No restaurant data available.
      </div>
    );
  }

  console.log("Selected Restaurant:", selectedRestaurant);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 font-sans">
      {/* 1. STICKY NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-md px-6 md:px-12 py-5 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-900 font-bold hover:text-blue-600 transition-all group"
        >
          <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
            <FaChevronLeft size={18} />
          </div>
          Back to Explore
        </button>
        <div className="text-sm font-black tracking-widest text-blue-600 uppercase">
          Restaurant Detail
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="max-w-7xl mx-auto mt-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Gallery Image */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-125">
            <img
              src={`${API_ENDPOINT.image(selectedRestaurant.pictureId)}`}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              alt={selectedRestaurant?.name}
            />
          </div>
        </div>

        {/* Content Info */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm shadow-emerald-100 ${selectedRestaurant?.isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              {selectedRestaurant?.isOpen ? "Open Now" : "Closed"}
            </span>
            <div className="flex gap-2">
              {selectedRestaurant?.categories.map((cat, i) => (
                <span
                  key={i}
                  className="text-blue-600 font-bold text-xs uppercase bg-blue-50 px-3 py-1.5 rounded-full"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-[0.9] tracking-tighter">
            {selectedRestaurant.name}
          </h1>

          <div className="flex items-center gap-8 mb-8 pb-8 border-b border-gray-100">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                Rating
              </span>
              <div className="flex items-center text-2xl font-black text-gray-900">
                <FaStar className="mr-2 text-yellow-400" />{" "}
                {selectedRestaurant.rating}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                Reviews
              </span>
              <div className="text-2xl font-black text-gray-900">
                {selectedRestaurant.customerReviews.length}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                Price
              </span>
              <div className="text-xl font-black text-gray-900">
                {formatIDR(selectedRestaurant.price)}
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium italic">
            "{selectedRestaurant.description}"
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-5 bg-white rounded-4xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all">
              <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                <FaMapMarkerAlt size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Address
                </span>
                <span className="text-sm font-bold text-gray-800 leading-tight">
                  {selectedRestaurant.address}, {selectedRestaurant.city}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-4xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all">
              <div className="p-4 bg-orange-50 rounded-2xl text-orange-600">
                <FaRegClock size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Opening Hours
                </span>
                <span className="text-sm font-bold text-gray-800 leading-tight">
                  09:00 - 22:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MENU SECTION */}
      <section className="max-w-7xl mx-auto mt-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter uppercase">
            Curated Menus
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Foods Card */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-50 hover:shadow-xl hover:shadow-orange-100/30 transition-all duration-500">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4 text-orange-600">
                <div className="p-4 bg-orange-50 rounded-3xl">
                  <FaUtensils size={28} />
                </div>
                <h3 className="text-3xl font-black tracking-tighter">
                  Fine Foods
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              {selectedRestaurant.menus.foods.map((food, i) => (
                <div
                  key={i}
                  className="group flex justify-between items-center p-5 hover:bg-orange-50 rounded-3xl transition-all cursor-default"
                >
                  <span className="font-black text-gray-700 group-hover:text-orange-600 transition-colors uppercase text-sm tracking-wide">
                    {food.name}
                  </span>
                  <FaCheckCircle
                    className="text-gray-100 group-hover:text-orange-500 transition-colors"
                    size={20}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Drinks Card */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-50 hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-500">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4 text-blue-600">
                <div className="p-4 bg-blue-50 rounded-3xl">
                  <FaGlassMartiniAlt size={28} />
                </div>
                <h3 className="text-3xl font-black tracking-tighter">
                  Signature Drinks
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              {selectedRestaurant.menus.drinks.map((drink, i) => (
                <div
                  key={i}
                  className="group flex justify-between items-center p-5 hover:bg-blue-50 rounded-3xl transition-all cursor-default"
                >
                  <span className="font-black text-gray-700 group-hover:text-blue-600 transition-colors uppercase text-sm tracking-wide">
                    {drink.name}
                  </span>
                  <FaCheckCircle
                    className="text-gray-100 group-hover:text-blue-500 transition-colors"
                    size={20}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. REVIEWS SECTION */}
      <section className="max-w-7xl mx-auto mt-32 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase">
              Community Voice
            </h2>
            <p className="text-gray-400 font-bold mt-2 uppercase text-xs tracking-[0.3em]">
              Latest Experiences
            </p>
          </div>
          <button className="w-fit bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-blue-600 transition-all shadow-xl shadow-gray-200">
            Write Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedRestaurant.customerReviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-transparent hover:border-blue-100 transition-all duration-500 relative group"
            >
              <FaQuoteLeft className="absolute top-8 right-10 text-gray-50 text-5xl group-hover:text-blue-50 transition-colors" />
              <div className="flex items-center gap-5 mb-8 relative">
                <div className="w-16 h-16 rounded-3xl bg-gray-900 flex items-center justify-center text-white font-black text-2xl shadow-xl">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-gray-900 tracking-tight">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest mt-1">
                    {rev.date}
                  </p>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-4 gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} size={12} />
                  ))}
              </div>

              <p className="text-gray-500 italic leading-relaxed font-medium text-sm">
                "{rev.review}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
