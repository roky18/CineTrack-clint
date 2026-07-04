import { useContext, useState } from "react";
import { MovieContext } from "./context/MovieContext";
import MovieForm from "./components/movies/MovieForm";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  const { movies, isLoading, deleteMovie, toggleWatched } =
    useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");

  // সার্চ এবং ফিল্টার লজিক
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (isLoading) {
    return <div className="text-center mt-20">Loading CineTrack...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-6">Dashboard</h1>

        {/* সার্চ ইনপুট ফিল্ড */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search movies..."
            className="border p-2 rounded-lg w-full max-w-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <MovieForm />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="border p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg">{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => toggleWatched(movie.id)}
                  className={`px-3 py-1 rounded ${movie.watched ? "bg-green-500" : "bg-yellow-500"} text-white`}
                >
                  {movie.watched ? "Watched" : "Mark as Watched"}
                </button>
                <button
                  onClick={() => deleteMovie(movie.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default App;
