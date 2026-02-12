import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/apiEndpoint";
import { http } from "../utils/http";
import type { DetailRestaurantResponse } from "../utils/type";
import { getConsistentMetadata } from "../utils/randomData";

export const fetchDetailRestaurant = async (id: string) => {
  const response = await http
    .get<DetailRestaurantResponse>(`${API_ENDPOINT.detail_restaurant}/${id}`)
    .then((result) => {
      const data = result as unknown as DetailRestaurantResponse;
      const restaurant = data.restaurant;
      const modifiedRestaurant = {
        ...restaurant,
       ...getConsistentMetadata(restaurant.id)
      };
      return modifiedRestaurant;
    })
    .catch((err) => {
      throw err;
    });
  return response;
};

export const useGetDetailRestaurant = (id: string) => {
  return useQuery({
    queryKey: ["detail-restaurant", id],
    queryFn: () => fetchDetailRestaurant(id),
  });
};
