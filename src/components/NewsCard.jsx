import { useFavorites } from "../hooks/useFavorites";

export default function NewsCard({ article }) {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const fav = isFavorite(article.url);

    const handleClick = () => {
        fav ? removeFavorite(article.url) : addFavorite(article);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {article.image && (
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
            )}

            <div className="flex flex-col flex-1 p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>

                <div className="mt-auto flex justify-between items-center">
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline font-medium text-sm"
                    >
                        Read more →
                    </a>

                    <button
                        onClick={handleClick}
                        className={`px-3 py-1 text-sm rounded-md font-medium transition-colors ${fav
                                ? "bg-yellow-400 text-white hover:bg-yellow-500"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        {fav ? "★ Favorited" : "☆ Favorite"}
                    </button>
                </div>
            </div>
        </div>
    )
}