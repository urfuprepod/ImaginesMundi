import { useQuery } from "@tanstack/react-query"

export const useQueryMainPage = () => {

    const query = useQuery({
        queryKey: ['main'],
        queryFn: async () => {}
    })

    return query;
}