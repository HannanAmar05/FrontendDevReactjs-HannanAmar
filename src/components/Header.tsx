
const Header = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
      <h1 className="text-2xl font-black text-[#1E3A8A]">
        Food<span className="text-[#3B82F6]">Explore.</span>
      </h1>
      <div className="flex items-center gap-6">
        <button className="text-gray-600 font-medium">Sign In</button>
        <button className="bg-[#3B82F6] text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-blue-700 transition">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Header;
