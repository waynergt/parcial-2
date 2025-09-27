import { useEffect, useState } from "react";
import type { Post } from "../types/Post";
import { fetchPosts, deletePost, updatePost } from "../api/posts";
import Table from "../components/Table";
import Modal from "../components/Modal";
import PostForm from "../components/PostForm";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [editPost, setEditPost] = useState<Post | null>(null);
  const [deletePostId, setDeletePostId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 9;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchPosts()
      .then(data => setPosts(data))
      .catch(() => setError("No se pudieron cargar los posts"))
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  const handleEdit = async (values: { title: string; body: string }) => {
    if (!editPost) return;
    setLoading(true);
    try {
      await updatePost(editPost.id, values);
      setPosts(posts =>
        posts.map(p =>
          p.id === editPost.id ? { ...p, ...values } : p
        )
      );
      setEditPost(null);
    } catch {
      setError("Error al editar el post");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deletePostId) return;
    setLoading(true);
    try {
      await deletePost(deletePostId);
      setPosts(posts => posts.filter(p => p.id !== deletePostId));
      setDeletePostId(null);
    } catch {
      setError("Error al eliminar el post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-8 bg-soft">
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <h1 className="text-4xl font-extrabold text-primary drop-shadow mb-8">
          Lista de publicaciones
        </h1>
        <button
          className="bg-info text-white font-bold px-6 py-2 rounded-xl shadow-lg hover:bg-success transition"
          onClick={() => navigate("/nuevo")}
        >
          + Añadir
        </button>
      </div>

      <div className="relative max-w-md w-full mb-6">
        <input
          type="search"
          placeholder="🔍 Buscar por título..."
          className="border-2 border-info px-4 py-2 rounded-lg focus:outline-success bg-white text-primary shadow w-full transition"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {loading && <p className="text-primary">Cargando...</p>}
      {error && <p className="text-accent">{error}</p>}

      {!loading && <Table posts={paginated} onEdit={setEditPost} onDelete={p => setDeletePostId(p.id)} />}
      <Pagination page={page} setPage={setPage} total={filtered.length} pageSize={pageSize} />

      <Modal open={!!editPost} onClose={() => setEditPost(null)} onBack={() => setEditPost(null)} title="Editar publicación">
        {editPost &&
          <PostForm
            initial={editPost}
            onSubmit={handleEdit}
            loading={loading}
          />}
      </Modal>

      <Modal open={!!deletePostId} onClose={() => setDeletePostId(null)} onBack={() => setDeletePostId(null)} title="¿Eliminar publicación?">
        <div className="flex flex-col gap-4">
          <p className="text-primary">¿Seguro que quieres eliminar este post?</p>
          <div className="flex gap-2">
            <button className="bg-accent text-white px-4 py-2 rounded hover:bg-warning hover:text-primary transition" onClick={handleDelete} disabled={loading}>
              Sí, eliminar
            </button>
            <button className="bg-card text-primary px-4 py-2 rounded hover:bg-info transition" onClick={() => setDeletePostId(null)}>
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
}