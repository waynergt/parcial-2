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
    <main className="min-h-screen px-4 py-8 bg-soft">
      <button
        className="mb-6 bg-info text-black px-4 py-2 rounded shadow hover:bg-primary transition"
        onClick={() => navigate("/")}
      >
        ← Regresar a la lista
      </button>
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Nueva publicación
      </h1>
      {error && <p className="text-accent mb-4">{error}</p>}
      <PostForm onSubmit={handleSubmit} loading={loading} />
    </main>
  );
}