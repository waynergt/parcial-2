import type { Post } from "../types/Post";

interface Props {
  post: Post;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function Card({ post, onEdit, onDelete }: Props) {
  return (
    <div className="
      bg-soft
      shadow-lg rounded-xl border-2 border-info p-5
      transition-all hover:scale-105 hover:shadow-xl
      flex flex-col justify-between min-h-[150px]
    ">
      <div>
        <h3 className="text-lg font-bold text-info mb-2">{post.title}</h3>
        <p className="text-gray-700">{post.body}</p>
      </div>
      <div className="flex justify-between items-end mt-4">
        <span className="text-sm text-primary font-semibold">Identificación: {post.id}</span>
        <div className="flex gap-2">
          {onEdit && (
            <button
              className="px-3 py-1 bg-success text-white rounded-lg shadow hover:bg-info transition"
              onClick={onEdit}
            >Editar</button>
          )}
          {onDelete && (
            <button
              className="px-3 py-1 bg-accent text-white rounded-lg shadow hover:bg-warning hover:text-primary transition"
              onClick={onDelete}
            >Eliminar</button>
          )}
        </div>
      </div>
    </div>
  );
}