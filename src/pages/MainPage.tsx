import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Hero from "../components/Hero";
import { useGetAllRestaurant } from "../services/get-list-restaurant";
import type { Restaurant } from "../utils/type";
import { useState } from "react";

const RestaurantApp = () => {
  const { data: restaurants, isLoading } = useGetAllRestaurant();
  const [displayRestaurants, setDisplayRestaurants] = useState<Restaurant[]>(
    [],
  );
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center text-5xl">
        Loading...
      </div>
    );
  }

  if (!restaurants || restaurants.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-5xl">
        No Restaurants Available
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F2F5]">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto py-12 px-6">
        <Filter
          onFilterChange={(filtered) => setDisplayRestaurants(filtered)}
          restaurants={restaurants}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayRestaurants?.map((item) => (
            <RestaurantCard key={item.id} restaurant={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default RestaurantApp;
