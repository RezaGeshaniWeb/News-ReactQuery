export default function SkeletonCard() {
    return (
        <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-100 animate-pulse">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded mb-1 w-4/5"></div>
            <div className="h-3 bg-gray-200 rounded mb-1 w-3/5"></div>
        </div>
    )
}