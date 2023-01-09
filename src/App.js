import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemedSuspense from "./components/ThemedSuspense";
import Page404 from "./pages/page404";
import Home from "./pages/home/home";
import About from "./pages/about/about.jsx";
import Project from "./pages/project/project.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<ThemedSuspense />}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/projects" exact element={<Project />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
