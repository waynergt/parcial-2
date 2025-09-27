import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}