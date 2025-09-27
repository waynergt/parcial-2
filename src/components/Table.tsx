import type { Post } from "../types/Post";
import Card from "./Card";

interface Props {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

export default function Table({ posts, onEdit, onDelete }: Props) {
  if (posts.length === 0)
    return <p className="text-center text-accent">No hay publicaciones para mostrar.</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <Card
          key={post.id}
          post={post}
          onEdit={() => onEdit(post)}
          onDelete={() => onDelete(post)}
        />
      ))}
    </div>
  );
}