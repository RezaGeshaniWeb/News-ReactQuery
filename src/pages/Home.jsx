import { useState } from "react";
import { useNewsInfinite } from "../queries/useNewsInfinite";
import { useNewsSearch } from "../queries/useNewsSearch";
import NewsCard from "../components/NewsCard";
import TopicTabs from "../components/TopicTabs";
import SearchBar from "../components/SearchBar";
import SkeletonCard from "../components/SkeletonCard";

export default function Home() {
    const [category, setCategory] = useState("technology");
    const [searchTerm, setSearchTerm] = useState("");

    const newsQuery = searchTerm
        ? useNewsSearch(searchTerm)
        : useNewsInfinite(category);

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
    } = newsQuery;

    return (
        <div className="flex flex-col gap-6">
            <SearchBar onSearch={setSearchTerm} />
            {!searchTerm && <TopicTabs current={category} onChange={setCategory} />}

            {isLoading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            )}

            {isError && (
                <p className="text-red-500 font-medium">
                    {error.message || "An error occurred while fetching the news."}
                </p>
            )}

            {!isLoading && (
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data?.pages.map((page, i) => (
                            <div key={i} className="contents">
                                {page.articles.map((article, index) => (
                                    <NewsCard key={index} article={article} />
                                ))}
                            </div>
                        ))}
                    </div>

                    {hasNextPage && (
                        <div className="flex justify-center">
                            <button
                                onClick={() => fetchNextPage()}
                                disabled={isFetchingNextPage}
                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 disabled:opacity-50 transition-colors"
                            >
                                {isFetchingNextPage ? "Loading..." : "Load More"}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}