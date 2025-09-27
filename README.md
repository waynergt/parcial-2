# Posts SPA - Parcial 2

Gestor de publicaciones tipo SPA usando **React + Vite + TailwindCSS**.  
Permite listar, buscar, añadir, editar y eliminar posts mediante la API [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

---

## 🚀 Demo en Vercel

[https://parcial-2-one.vercel.app/](https://parcial-2-one.vercel.app/)

---

## 📦 Repositorio

[https://github.com/waynergt/parcial-2](https://github.com/waynergt/parcial-2)

---

## 🖥️ Características

- Listado de publicaciones con paginación y búsqueda por título.
- Añadir nueva publicación (formulario con validaciones).
- Editar publicación (modal accesible).
- Eliminar publicación (modal confirmación).
- Optimistic UI: la lista se actualiza al instante.
- Estados de carga y error.
- Estilos modernos y responsivos con **TailwindCSS**.
- Componentes reutilizables: Modal, Card, Table, Form, Pagination.
- Accesibilidad: modales se cierran con Esc y clic fuera.

---

## 🛠️ Instalación y ejecución local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/waynergt/parcial-2.git
   cd parcial-2
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Ejecuta en desarrollo:
   ```bash
   npm run dev
   ```

---

## 🏗️ Build de producción

```bash
npm run build
```

---

## 🌐 Despliegue

El proyecto está desplegado en [Vercel](https://vercel.com/)  
La carpeta de publicación es `dist` (Vite por defecto).

---

## 🧩 Stack

- **React** + **Vite**
- **TypeScript**
- **TailwindCSS**
- **React Router DOM**
- **JSONPlaceholder** (API)

---

## 📁 Estructura recomendada

```plaintext
src/
├── components/    # UI reutilizable
├── pages/         # Vistas y rutas
├── api/           # Funciones de conexión con API
├── types/         # Tipos TypeScript
├── App.tsx
├── main.tsx
├── index.css
```

---

## ✨ Autor

**Wayner GT**  
[GitHub - @waynergt](https://github.com/waynergt)

