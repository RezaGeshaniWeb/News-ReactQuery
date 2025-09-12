import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [term, setTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(term.trim());
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-sm px-3 py-2 w-full sm:w-[400px] max-w-full"
        >
            <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search news..."
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
            />
            <button
                type="submit"
                className="bg-blue-600 cursor-pointer text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-500 transition-colors"
            >
                Search
            </button>
        </form>
    )
}