import { categories } from "../constants/categories";

export default function TopicTabs({ current, onChange }) {
    return (
        <div className="flex gap-2 p-3 border-b border-gray-300 overflow-x-auto">
            {categories.map((cat) => (
                <button
                    key={cat.key}
                    onClick={() => onChange(cat.key)}
                    className={`px-3 py-1.5 rounded cursor-pointer border border-gray-200 transition-colors whitespace-nowrap ${current === cat.key
                            ? "bg-blue-600 text-white"
                            : "bg-white hover:bg-gray-100 text-gray-600"
                        }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    )
}