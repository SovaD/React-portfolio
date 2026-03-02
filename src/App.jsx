import React, { useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound"; 
import CustomCursor from "./components/CustomCursor";
import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    const originalTitle = document.title;

    const handleBlur = () => {
      document.title = "Вернись, я всё прощу! 🦉";
    };

    const handleFocus = () => {
      document.title = originalTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer
        style={{
          padding: "40px 0",
          textAlign: "center",
          color: "var(--text-muted)",
        }}
      >
        <p>© {new Date().getFullYear()} SovaD. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;