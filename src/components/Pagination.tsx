interface Props {
  page: number;
  setPage: (n: number) => void;
  total: number;
  pageSize?: number;
}

export default function Pagination({ page, setPage, total, pageSize = 9 }: Props) {
  const pages = Math.ceil(total / pageSize);
  if (pages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 my-10">
      <button
        className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow hover:from-emerald-500 hover:to-green-600 transition disabled:opacity-40"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        ← Anterior
      </button>

      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          className={`px-3 py-1 rounded-xl font-semibold transition shadow ${
            page === i + 1
              ? "bg-gradient-to-r from-rose-500 to-red-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-indigo-500 hover:text-white"
          }`}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow hover:from-emerald-500 hover:to-green-600 transition disabled:opacity-40"
        onClick={() => setPage(page + 1)}
        disabled={page === pages}
      >
        Siguiente →
      </button>
    </div>
  );
}
