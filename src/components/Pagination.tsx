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
    <div className="flex justify-center gap-2 my-8">
      <button
        className="px-4 py-2 rounded bg-info text-white font-bold hover:bg-success transition disabled:opacity-40"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >Anterior</button>
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          className={`px-3 py-1 rounded font-bold transition
            ${page === i + 1 ? "bg-accent text-white shadow" : "bg-card text-primary hover:bg-info"}
          `}
          onClick={() => setPage(i + 1)}
        >{i + 1}</button>
      ))}
      <button
        className="px-4 py-2 rounded bg-info text-white font-bold hover:bg-success transition disabled:opacity-40"
        onClick={() => setPage(page + 1)}
        disabled={page === pages}
      >Siguiente</button>
    </div>
  );
}