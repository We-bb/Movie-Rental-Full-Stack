'use client';

import React, { useState } from 'react';

interface MovieFormProps {
  onSubmit: (movie: {
    thumbnail: string;
    title: string;
    actors: string;
    releaseYear: string;
  }) => void;
  initialData?: {
    thumbnail?: string;
    title?: string;
    actors?: string;
    releaseYear?: string;
  };
  onCancel?: () => void;
}

export default function MovieForm({ onSubmit, initialData = {}, onCancel }: MovieFormProps) {
  const [thumbnail, setThumbnail] = useState(initialData.thumbnail || '');
  const [title, setTitle] = useState(initialData.title || '');
  const [actors, setActors] = useState(initialData.actors || '');
  const [releaseYear, setReleaseYear] = useState(initialData.releaseYear || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !actors || !releaseYear) {
      alert('Please fill all required fields.');
      return;
    }
    onSubmit({ thumbnail, title, actors, releaseYear });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-xl shadow-lg p-8 max-w-xl w-full mb-12">
      <label className="block mb-2 font-semibold text-gray-300">Thumbnail URL</label>
      <input
        type="url"
        value={thumbnail}
        onChange={e => setThumbnail(e.target.value)}
        placeholder="https://example.com/image.jpg"
        className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 mb-6 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block mb-2 font-semibold text-gray-300">Title *</label>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 mb-6 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block mb-2 font-semibold text-gray-300">Actors (comma-separated) *</label>
      <input
        type="text"
        value={actors}
        onChange={e => setActors(e.target.value)}
        required
        placeholder="Actor 1, Actor 2, Actor 3"
        className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 mb-6 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block mb-2 font-semibold text-gray-300">Release Year *</label>
      <input
        type="number"
        value={releaseYear}
        onChange={e => setReleaseYear(e.target.value)}
        required
        className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 mb-6 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Submit
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
