import { FilmApp } from "./pages/FilmAppPage/FilmApp";
import { FilmAboutPage } from "./pages/FilmAboutPage/FilmAboutPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage/NotFound.jsx";
import { MovieIdProvider } from "./components/filmCards/FilmCardContext";
import { PaginationProvider } from "./components/pagination/PaginationContext.jsx";
import { SelectProvider } from "./components/filter/select/SelectContext.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <MovieIdProvider>
      <PaginationProvider>
        <SelectProvider>
          <Routes>
            <Route path="/" element={<FilmApp />} />
            <Route path="/filmAbout" element={<FilmAboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SelectProvider>
      </PaginationProvider>
    </MovieIdProvider>
  );
} 
