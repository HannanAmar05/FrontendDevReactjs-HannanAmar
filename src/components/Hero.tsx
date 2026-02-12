
const Hero = () => {
  return (
    <section className="relative h-112.5 flex items-center px-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Restaurant Background"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl text-white">
        <h2 className="text-6xl font-bold mb-4">Restaurants</h2>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          Discover unique culinary experiences from local favorites to exotic
          international cuisines. Find your next favorite spot with us.
        </p>
        <button className="bg-[#3B82F6] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-xl">
          LOAD MORE
        </button>
      </div>
    </section>
  );
}

export default Hero