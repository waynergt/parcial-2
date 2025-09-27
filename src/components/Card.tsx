import type { Post } from "../types/Post";

interface Props {
  post: Post;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function Card({ post, onEdit, onDelete }: Props) {
  return (
    <div
      className="
        bg-gradient-to-br from-white via-gray-50 to-gray-100
        dark:from-gray-800 dark:via-gray-900 dark:to-black
        shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-2xl
        flex flex-col justify-between min-h-[180px]
      "
    >
      <div>
        <h3 className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-3 tracking-wide">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{post.body}</p>
      </div>

      <div className="flex justify-between items-end mt-6">
        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium italic">
          Identificación:{" "}
          <span className="text-indigo-500 dark:text-indigo-300 font-semibold">
            {post.id}
          </span>
        </span>

        <div className="flex gap-3">
          {onEdit && (
            <button
              className="
                px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600
                text-white font-semibold rounded-xl shadow-md
                hover:from-indigo-500 hover:to-purple-600
                transition duration-300 ease-in-out transform hover:-translate-y-1
              "
              onClick={onEdit}
            >
              ✏️ Editar
            </button>
          )}
          {onDelete && (
            <button
              className="
                px-4 py-2 bg-gradient-to-r from-rose-500 to-red-600
                text-white font-semibold rounded-xl shadow-md
                hover:from-orange-500 hover:to-yellow-500 hover:text-black
                transition duration-300 ease-in-out transform hover:-translate-y-1
              "
              onClick={onDelete}
            >
              🗑️ Eliminar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
