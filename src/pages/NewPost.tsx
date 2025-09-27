import { useState } from "react";
import { createPost } from "../api/posts";
import PostForm from "../components/PostForm";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (values: { title: string; body: string }) => {
    setLoading(true);
    try {
      await createPost({ ...values, userId: 1 });
      navigate("/");
    } catch {
      setError("Error al crear el post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <button
        className="mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-xl shadow hover:from-emerald-500 hover:to-green-600 transition"
        onClick={() => navigate("/")}
      >
        ← Regresar a la lista
      </button>
      <h1 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
        📝 Nueva publicación
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <PostForm onSubmit={handleSubmit} loading={loading} />
    </main>
  );
}
