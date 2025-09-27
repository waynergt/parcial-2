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
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="
          w-full max-w-lg
          bg-white dark:bg-gray-900
          rounded-2xl shadow-2xl overflow-hidden
          transform transition-all duration-300 animate-fadeIn
          max-h-[90vh] flex flex-col
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Encabezado */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-indigo-500 to-purple-600">
          {title && (
            <h2 className="text-lg md:text-xl font-bold text-white">
              {title}
            </h2>
          )}
          <button
            className="text-white text-2xl font-bold hover:scale-110 transition"
            aria-label="Cerrar"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Botón regresar opcional */}
        {onBack && (
          <button
            className="m-4 mb-0 bg-info text-white px-3 py-2 rounded shadow hover:bg-primary transition"
            aria-label="Regresar"
            onClick={onBack}
          >
            {backText}
          </button>
        )}

        {/* Contenido con scroll */}
        <div className="px-6 py-5 space-y-4 text-gray-700 dark:text-gray-200 overflow-y-auto">
          {children}
        </div>

        {/* Footer opcional */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <button
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold transition dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
