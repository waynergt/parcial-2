import type { Post } from "../types/Post";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchPosts() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al cargar posts");
  return res.json();
}

export async function createPost(post: Omit<Post, 'id'>) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post)
  });
  if (!res.ok) throw new Error("Error al crear post");
  return res.json();
}

export async function updatePost(id: number, post: Partial<Post>) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post)
  });
  if (!res.ok) throw new Error("Error al editar post");
  return res.json();
}

export async function deletePost(id: number) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar post");
  return res.json();
}