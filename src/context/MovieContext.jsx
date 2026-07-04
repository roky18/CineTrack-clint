import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useLocalStorage("cineTrackMovies", []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const addMovie = (movie) => {
    setMovies((prev) => [
      ...prev,
      { ...movie, id: Date.now(), watched: false },
    ]);
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const toggleWatched = (id) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie,
      ),
    );
  };

  return (
    <MovieContext.Provider
      value={{ movies, addMovie, deleteMovie, toggleWatched, isLoading }}
    >
      {children}
    </MovieContext.Provider>
  );
};
