import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/apiEndpoint";
import { http } from "../utils/http";
import type { RestaurantResponse } from "../utils/type";
import { getConsistentMetadata } from "../utils/randomData";

export const fetchDataRestaurant = async () => {
  const response = await http
    .get<RestaurantResponse>(API_ENDPOINT.all_restaurant)
    .then((result) => {
      const data = result as unknown as RestaurantResponse;
      const modifiedRestaurants = data.restaurants.map((res) => {
        return {
          ...res,
          ...getConsistentMetadata(res.id)
        };
      });
      return modifiedRestaurants;
    })
    .catch((err) => {
      throw err;
    });
  return response;
};

export const useGetAllRestaurant = () => {
  return useQuery({
    queryKey: ["restaurant"],
    queryFn: fetchDataRestaurant,
  });
};
