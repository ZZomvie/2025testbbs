import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import MenuComp from "./components/layout/MenuComp";
import Home from "./pages/Home";
import Board from "./pages/Board";
import ErrerComp from "./pages/Error";

function App() {
  return (
    <>
      {/* ✅ Bootstrap CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>

      {/* ✅ Router 설정 */}
      <BrowserRouter>
        <MenuComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/board" element={<Board />} />
          <Route path="*" element={<ErrerComp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
