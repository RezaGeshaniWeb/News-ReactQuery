import axios from "axios";

const API_KEY = "a69833498defceba8a16c384aa359445"

export const fetchNewsByCategory = async ({ category, pageParam = 1 }) => {
    const res = await axios.get(`https://gnews.io/api/v4/top-headlines`, {
        params: {
            topic: category,    
            lang: "en",
            country: "us",
            max: 10,            
            page: pageParam,
            token: API_KEY,     
        },
    });
    return res.data;
};

export const fetchNewsBySearch = async ({ searchTerm, pageParam = 1 }) => {
    const res = await axios.get(`https://gnews.io/api/v4/search`, {
        params: {
            q: searchTerm,
            lang: "en",
            max: 10,
            page: pageParam,
            sortBy: "publishedAt",
            token: API_KEY,
        },
    });
    return res.data;
}