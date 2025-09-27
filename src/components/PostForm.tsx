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
      setError("El título es requerido");
      return;
    }
    setError("");
    onSubmit({ title, body });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="flex flex-col">
        <span className="mb-1 font-medium text-primary">Título</span>
        <input
          type="text"
          className="border-2 border-info rounded-lg px-3 py-2 focus:outline-success bg-white text-primary"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          autoFocus
        />
      </label>
      <label className="flex flex-col">
        <span className="mb-1 font-medium text-primary">Contenido</span>
        <textarea
          className="border-2 border-info rounded-lg px-3 py-2 focus:outline-success bg-white text-primary"
          value={body}
          onChange={e => setBody(e.target.value)}
          rows={4}
        />
      </label>
      {error && <span className="text-accent">{error}</span>}
      <button
        type="submit"
        className="bg-success text-white py-2 rounded-lg font-semibold shadow hover:bg-info transition"
        disabled={loading}
      >
        {loading ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}