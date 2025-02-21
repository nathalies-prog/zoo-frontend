
import { useQuery } from "@tanstack/react-query";
import { GET_ALL_EMPLOYEES_URL } from "../constants";
import {StaffResponse}  from "../types";
export const useStaff = () => useQuery<StaffResponse>({
    queryKey: ['employees-list'],
    queryFn: async () : Promise<StaffResponse>  => {
        const response = await fetch(`${GET_ALL_EMPLOYEES_URL}`);
        const data = await response.json();
        return data;
    },
});