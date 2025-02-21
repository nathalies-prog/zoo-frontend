
import { useQuery } from "@tanstack/react-query";
import { DonationResponse } from "../types";
import { GET_ALL_DONATIONS_URL } from "../constants";

export const useDonations = () => useQuery<DonationResponse>({
    queryKey: ['donations-list'],
    queryFn: async () : Promise<DonationResponse>  => {
        const response = await fetch(`${GET_ALL_DONATIONS_URL}`);
        const data = await response.json();
        return data;
    },
});