import { type ReactNode, useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  onBack?: () => void;
  backText?: string;
}

export default function Modal({
  open,
  onClose,
  children,
  title,
  onBack,
  backText = "← Regresar",
}: Props) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 dark:bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="
          bg-gradient-to-br from-white via-gray-50 to-gray-100
          dark:from-gray-800 dark:via-gray-900 dark:to-black
          rounded-2xl p-6 shadow-2xl min-w-[320px] max-w-lg relative
          transition-transform duration-300 ease-out animate-fadeIn
        "
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Botón cerrar */}
        <button
          className="
            absolute top-3 right-3 text-gray-400 hover:text-red-500
            dark:hover:text-red-400 text-2xl font-bold transition
          "
          aria-label="Cerrar"
          onClick={onClose}
        >
          ×
        </button>

        {onBack && (
          <button
            className="
              mb-4 bg-gradient-to-r from-indigo-500 to-purple-600
              text-white px-4 py-2 rounded-xl shadow-md
              hover:from-emerald-500 hover:to-green-600
              transition duration-300 ease-in-out
            "
            aria-label="Regresar"
            onClick={onBack}
            style={{ display: "block" }}
          >
            {backText}
          </button>
        )}

        {title && (
          <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
            {title}
          </h2>
        )}

        <div className="text-gray-700 dark:text-gray-200">{children}</div>
      </div>
    </div>
  );
}
