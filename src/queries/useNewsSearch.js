import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchNewsBySearch } from "../api/newsApi";

export function useNewsSearch(searchTerm) {
    return useInfiniteQuery({
        queryKey: ["searchNews", searchTerm],
        queryFn: ({ pageParam = 1 }) =>
            fetchNewsBySearch({ searchTerm, pageParam }),
        enabled: !!searchTerm,
        getNextPageParam: (lastPage, allPages) => {
            if (!lastPage.articles.length) return undefined;
            return allPages.length + 1;
        },
        refetchOnWindowFocus: true,
        refetchInterval: 5 * 60 * 1000,
        staleTime: 60 * 1000,
    })
}