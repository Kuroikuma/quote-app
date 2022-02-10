import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardQuote } from "../components/card-quote/card-quote";
import { AuthorQuotes } from "../page/authors-quotes/author-quotes";
import { Home } from "../page/home/home";
export function IndexRoutes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardQuote />} />
        <Route path="/home" element={<Home />} />
        <Route path="author/:author" element={<AuthorQuotes />} />
        <Route index element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
