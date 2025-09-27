import { type ReactNode, useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  onBack?: () => void;
  backText?: string;
}

export default function Modal({ open, onClose, children, title, onBack, backText = "← Regresar" }: Props) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-xl p-6 shadow-xl min-w-[320px] max-w-lg relative"
        onClick={e => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Botón cerrar */}
        <button
          className="absolute top-3 right-3 text-accent text-xl font-bold"
          aria-label="Cerrar"
          onClick={onClose}
        >×</button>
        {onBack && (
          <button
            className="mb-4 bg-info text-white px-3 py-2 rounded shadow hover:bg-primary transition"
            aria-label="Regresar"
            onClick={onBack}
            style={{ display: "block" }}
          >
            {backText}
          </button>
        )}
        {title && <h2 className="text-xl font-bold mb-4 text-info">{title}</h2>}
        {children}
      </div>
    </div>
  );
}