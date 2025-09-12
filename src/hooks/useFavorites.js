import { useState, useEffect } from "react";

export function useFavorites() {
    const [favorites, setFavorites] = useState(() => {
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (article) => {
        setFavorites((prev) => {
            if (prev.some((fav) => fav.url === article.url)) return prev;
            return [...prev, article];
        });
    };

    const removeFavorite = (url) => {
        setFavorites((prev) => prev.filter((fav) => fav.url !== url));
    };

    const isFavorite = (url) => {
        return favorites.some((fav) => fav.url === url);
    };

    return { favorites, addFavorite, removeFavorite, isFavorite };
}