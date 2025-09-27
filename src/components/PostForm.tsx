import { useState } from "react";
import type { Post } from "../types/Post";

interface Props {
  initial?: Partial<Post>;
  onSubmit: (values: { title: string; body: string }) => void;
  loading?: boolean;
}

export default function PostForm({ initial, onSubmit, loading }: Props) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [body, setBody] = useState(initial?.body ?? "");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("⚠️ El título es requerido");
      return;
    }
    setError("");
    onSubmit({ title, body });
  };

  return (
    <form
      className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col">
        <span className="mb-2 font-semibold text-gray-700 dark:text-gray-200">
          Título
        </span>
        <input
          type="text"
          className="border-2 border-indigo-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          autoFocus
        />
      </label>

      <label className="flex flex-col">
        <span className="mb-2 font-semibold text-gray-700 dark:text-gray-200">
          Contenido
        </span>
        <textarea
          className="border-2 border-indigo-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
          value={body}
          onChange={e => setBody(e.target.value)}
          rows={5}
        />
      </label>

      {error && <span className="text-red-500 font-medium">{error}</span>}

      <button
        type="submit"
        className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-2 rounded-xl font-semibold shadow hover:from-indigo-500 hover:to-purple-600 transition"
        disabled={loading}
      >
        {loading ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}
