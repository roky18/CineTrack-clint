import { useContext } from "react";
import { MovieContext } from "./context/MovieContext";
import MovieForm from "./components/movies/MovieForm";

function App() {
  const { movies, isLoading, deleteMovie, toggleWatched } =
    useContext(MovieContext);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading CineTrack...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-6">
        CineTrack Dashboard
      </h1>

      <MovieForm />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {movies.map((movie) => (
          <div key={movie.id} className="border p-4 rounded shadow">
            <h3 className="font-bold text-lg">{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>
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
    </div>
  );
}

export default App;
