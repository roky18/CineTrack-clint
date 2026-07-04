import { useContext } from "react";
import { MovieContext } from "./context/MovieContext";
import MovieForm from "./components/movies/MovieForm";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  const { movies, isLoading, deleteMovie, toggleWatched } =
    useContext(MovieContext);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold">
        Loading CineTrack...
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-6">Dashboard</h1>

        <MovieForm />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg">{movie.title}</h3>
              <p className="text-gray-600">Genre: {movie.genre}</p>
              <p className="text-gray-600">Year: {movie.year}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => toggleWatched(movie.id)}
                  className={`px-3 py-1 rounded text-sm ${
                    movie.watched ? "bg-green-600" : "bg-yellow-500"
                  } text-white hover:opacity-90`}
                >
                  {movie.watched ? "Watched" : "Mark as Watched"}
                </button>
                <button
                  onClick={() => deleteMovie(movie.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
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
