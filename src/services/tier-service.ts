
import { useQuery } from "@tanstack/react-query";
import { GET_ALL_ANIMALS_URL } from "../constants";
import { AnimalResponse } from "../types";
export const useAnimals = () => useQuery<AnimalResponse>({
    queryKey: ['animal-list'],
    queryFn: async () : Promise<AnimalResponse>  => {
        const response = await fetch(`${GET_ALL_ANIMALS_URL}`);
        console.log(response.status);
        const data = await response.json();
        return data;
    },
});