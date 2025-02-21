
import { useQuery } from "@tanstack/react-query";
import { EnclosureResponse } from "../types";
import { GET_ALL_ENCLOSURES } from "../constants";

export const useEnclosures = () => useQuery<EnclosureResponse>({
    queryKey: ['enclosure-list'],
    queryFn: async () : Promise<EnclosureResponse>  => {
        const response = await fetch(`${GET_ALL_ENCLOSURES}`);
        console.log(response.status);
        const data = await response.json();
        return data;
    },
});