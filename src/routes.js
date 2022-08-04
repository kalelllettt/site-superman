import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./App"));
const TiposKryptonita = lazy(() => import("./tipos-de-kryptonita"));

export default function Paginas() {
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tipos-de-kryptonita" element={<TiposKryptonita />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
