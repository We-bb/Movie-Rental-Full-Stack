'use client';

import React from 'react';

interface Movie {
  id: string;
  thumbnail?: string;
  title: string;
  actors: string[];
  releaseYear: number;
}

interface MovieCardProps {
  movie: Movie;
  onEdit: (movie: Movie) => void;
  onDelete: (id: string) => void;
}

export default function MovieCard({ movie, onEdit, onDelete }: MovieCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center w-64 m-4">
      {movie.thumbnail ? (
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      ) : (
        <div className="w-full h-40 bg-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
      <p className="text-gray-300 mb-1">
        <strong>Actors:</strong> {movie.actors.join(', ')}
      </p>
      <p className="text-gray-300 mb-4">
        <strong>Release Year:</strong> {movie.releaseYear}
      </p>

      <div className="flex space-x-4">
        <button
          onClick={() => onEdit(movie)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(movie.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
