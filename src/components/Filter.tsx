import { useState, useEffect } from "react";
import type { RestaurantFilter } from "../utils/type";

const Filter = ({ restaurants, onFilterChange }: RestaurantFilter) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterPrice, setFilterPrice] = useState<string>("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  // Efek untuk memberi tahu parent (HomePage) setiap kali hasil filter berubah
  useEffect(() => {
    const filtered = restaurants?.filter((res) => {
      // 1. Filter Open Now
      const matchesOpen = filterOpen ? res.isOpen === true : true;

      // 2. Filter Price
      const matchesPrice =
        filterPrice === "all" ? true
          : filterPrice === "low"
            ? res.price < 25000
            : filterPrice === "medium"
              ? res.price >= 25000 && res.price <= 40000
              : res.price > 40000;

      // 3. Filter Category (Gunakan properti category hasil mocking kita tadi)
      // const matchesCategory =
      //   filterCategory === "all" ? true : res.category === filterCategory;

      return matchesOpen && matchesPrice 
    });

    onFilterChange(filtered || []);
  }, [filterOpen, filterPrice, filterCategory, restaurants, onFilterChange]);

  const handleClearAll = () => {
    setFilterOpen(false);
    setFilterPrice("all");
    setFilterCategory("all");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mb-10 flex flex-wrap justify-between items-center gap-4">
      <div className="flex items-center gap-8">
        <h3 className="text-xl font-bold text-gray-800 border-b-4 border-blue-500 pb-1">
          All Restaurants
        </h3>

        <div className="flex gap-4">
          {/* Checkbox/Select Open Now */}
          <select
            value={filterOpen ? "open" : "all"}
            onChange={(e) => setFilterOpen(e.target.value === "open")}
            className="bg-gray-50 border-none rounded-lg p-2 text-sm text-gray-600 outline-none cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="open">Open Now</option>
          </select>

          {/* Select Price Range */}
          <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="bg-gray-50 border-none rounded-lg p-2 text-sm text-gray-600 outline-none cursor-pointer"
          >
            <option value="all">Price Range</option>
            <option value="low">Under Rp25.000</option>
            <option value="medium">Rp25.000 - Rp40.000</option>
            <option value="high">Above Rp40.000</option>
          </select>

          {/* Select Categories */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-gray-50 border-none rounded-lg p-2 text-sm text-gray-600 outline-none cursor-pointer"
          >
            <option value="all">Categories</option>
            <option value="Italian">Italian</option>
            <option value="Modern">Modern</option>
            <option value="Soup">Soup</option>
            <option value="Japanese">Japanese</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleClearAll}
        className="bg-gray-100 text-gray-400 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-500 hover:text-white transition"
      >
        CLEAR ALL
      </button>
    </div>
  );
};

export default Filter;
