import { useFavorites } from "../hooks/useFavorites";
import NewsCard from "../components/NewsCard";

export default function Favorites() {
    const { favorites } = useFavorites();

    if (favorites.length === 0) {
        return (
            <p className="text-gray-500 text-center mt-10 min-h-screen">
                No favorites yet. Start adding some news to your list!
            </p>
        );
    }

    return (
        <div className="flex flex-col gap-6 min-h-screen">
            <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">
                My Favorites
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
        </div>
    )

}
