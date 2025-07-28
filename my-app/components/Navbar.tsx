import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-white select-none">
          🎬 IMR Movie Portal
        </h1>
        <div className="space-x-10 text-lg font-semibold">
          <Link
            href="/"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/movie"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
}