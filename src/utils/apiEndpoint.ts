export const API_ENDPOINT = {
    all_restaurant: "/list",
    detail_restaurant: "/detail",
    image: (id:string) => `https://restaurant-api.dicoding.dev/images/large/${id}`,
}