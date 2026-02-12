export interface Restaurant {
  id: string;
  name: string;
  description: string;
  pictureId: string;
  city: string;
  rating: number;
  isOpen: boolean;
  price: number;
  category: string;
}

export interface RestaurantResponse {
  error?: boolean;
  message?: string;
  count?: number;
  restaurants: Restaurant[];
}

export interface RestaurantCardProps {
  restaurant: Restaurant;
}

export interface RestaurantFilter {
  restaurants: Restaurant[];
  onFilterChange: (filtered: Restaurant[]) => void;
}

export interface MenuItem {
  name: string;
}

export interface DetailRestaurant extends Restaurant {
  address: string;
  categories: { name: string }[];
  menus: {
    foods: MenuItem[];
    drinks: MenuItem[];
  };
  customerReviews: {
    name: string;
    review: string;
    date: string;
  }[];
  isOpen: boolean;
  price: number;
}

export interface DetailRestaurantResponse {
  error?: boolean;
  message?: string;
  restaurant: DetailRestaurant;
}
