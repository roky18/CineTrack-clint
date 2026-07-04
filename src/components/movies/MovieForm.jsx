import { useState, useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const { addMovie } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mandatory client-side validation
    if (!title || !genre || !year) {
      alert("Please fill in all fields!");
      return;
    }

    addMovie({ title, genre, year });
    setTitle("");
    setGenre("");
    setYear("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto my-6"
    >
      <h2 className="text-xl font-bold mb-4">Add New Movie</h2>
      <input
        className="block w-full p-2 mb-2 border rounded"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="block w-full p-2 mb-2 border rounded"
        placeholder="Genre (e.g. Action)"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        className="block w-full p-2 mb-4 border rounded"
        placeholder="Release Year"
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Movie
      </button>
    </form>
  );
};

export default MovieForm;
