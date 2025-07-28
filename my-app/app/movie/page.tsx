'use client';

import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import MovieForm from '../../components/MovieForm';

interface Movie {
  id: string;
  thumbnail?: string;
  title: string;
  actors: string[];
  releaseYear: number;
}

export default function MoviePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  // Load movies from API
  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const res = await fetch('/api/movies');
        if (!res.ok) throw new Error('Failed to fetch movies');
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  const openAddForm = () => {
    setEditingMovie(null);
    setShowForm(true);
  };

  const openEditForm = (movie: Movie) => {
    setEditingMovie(movie);
    setShowForm(true);
  };

  const closeForm = () => {
    setEditingMovie(null);
    setShowForm(false);
  };

  // Add or update movie via API
  const handleFormSubmit = async (movieData: {
    thumbnail: string;
    title: string;
    actors: string;
    releaseYear: string;
  }) => {
    const method = editingMovie ? 'PUT' : 'POST';
    const url = editingMovie ? `/api/movies/${editingMovie.id}` : '/api/movies';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...movieData,
          actors: movieData.actors.split(',').map((a) => a.trim()),
          releaseYear: parseInt(movieData.releaseYear),
        }),
      });

      if (!res.ok) throw new Error('Failed to save movie');

      const updatedMovie = await res.json();

      if (editingMovie) {
        setMovies((prev) =>
          prev.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
        );
      } else {
        setMovies((prev) => [...prev, updatedMovie]);
      }

      closeForm();
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Unknown error');
    }
  };

  // Delete movie via API
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this movie?')) return;

    try {
      const res = await fetch(`/api/movies/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete movie');

      setMovies((prev) => prev.filter((m) => m.id !== id));
      if (editingMovie?.id === id) closeForm();
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return (
    <section className="flex flex-col items-center p-8 bg-gray-900 min-h-screen">
      <div className="flex justify-between w-full mb-10 max-w-5xl px-2">
        <h1 className="text-4xl font-bold text-white select-none">Movies</h1>
        <button
          onClick={() => (showForm ? closeForm() : openAddForm())}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-2 rounded-lg shadow-lg"
        >
          {showForm ? 'Cancel' : editingMovie ? 'Edit Movie' : 'Add Movie'}
        </button>
      </div>

      {showForm && (
        <MovieForm
          onSubmit={handleFormSubmit}
          initialData={
            editingMovie
              ? {
                  thumbnail: editingMovie.thumbnail || '',
                  title: editingMovie.title,
                  actors: editingMovie.actors.join(', '),
                  releaseYear: editingMovie.releaseYear.toString(),
                }
              : undefined
          }
          onCancel={closeForm}
        />
      )}

      {loading ? (
        <p className="text-gray-400">Loading movies...</p>
      ) : movies.length === 0 ? (
        <p className="text-gray-400 text-center w-full">No movies available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl w-full px-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onEdit={openEditForm}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}
