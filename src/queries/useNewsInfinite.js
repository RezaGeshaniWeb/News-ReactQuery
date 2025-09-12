import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchNewsByCategory } from "../api/newsApi";

export function useNewsInfinite(category) {
    return useInfiniteQuery({
        queryKey: ["news", category],
        queryFn: ({ pageParam = 1 }) =>
            fetchNewsByCategory({ category, pageParam }),
        getNextPageParam: (lastPage, allPages) => {
            if (!lastPage.articles.length) return undefined;
            return allPages.length + 1;
        },
        refetchOnWindowFocus: true,      
        refetchInterval: 5 * 60 * 1000,  
        staleTime: 60 * 1000,            
    })
}