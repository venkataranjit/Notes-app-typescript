import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Nav from "./components/Nav";

const Home = lazy(() => import("./components/Home"));
const Notes = lazy(() => import("./components/Notes"));

function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <div className="container">
          <Suspense fallback={<h3>Loading...</h3>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notes" element={<Notes />} />
            </Routes>
          </Suspense>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
