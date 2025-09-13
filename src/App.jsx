import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14">
          <div className="flex space-x-6">
            <Link
              to="/"
              className={`font-semibold transition-colors ${location.pathname === "/" ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
                }`}
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className={`font-semibold transition-colors ${location.pathname === "/favorites"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
                }`}
            >
              Favorites
            </Link>
          </div>
          <span className="text-sm text-gray-500">News Aggregator</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>

      <footer className="bg-gray-200 p-3 text-gray-800 text-center">
        Developed By <em>Reza Geshani</em>
      </footer>
    </div>
  );
}
