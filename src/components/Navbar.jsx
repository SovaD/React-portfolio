import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Github, Send } from "lucide-react";
import { NavHashLink } from "react-router-hash-link";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { t, theme, toggleTheme, lang, toggleLang } = useAppContext();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- LOCK BODY SCROLL (mobile menu) ---------------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  /* --------- SAFETY: fallback если t.nav не загрузился --------- */
  const navText = t?.nav || {
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  };

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">

        {/* LOGO */}
        <NavHashLink smooth to="/#" className="logo" onClick={closeMenu}>
          {"<"}SovaD{"/>"}
        </NavHashLink>

        {/* ---------------- DESKTOP MENU ---------------- */}
        <nav className="desktop-menu">
          <NavHashLink smooth to="/#skills" className="nav-link">
            {navText.skills}
          </NavHashLink>

          <NavHashLink smooth to="/#projects" className="nav-link">
            {navText.projects}
          </NavHashLink>

          <NavHashLink smooth to="/#contact" className="nav-link">
            {navText.contact}
          </NavHashLink>

          <div className="nav-divider" />

          <button onClick={toggleLang} className="icon-btn lang-btn">
            {lang === "ru" ? "EN" : "RU"}
          </button>

          <button onClick={toggleTheme} className="icon-btn">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <a
            href="https://github.com/SovaD"
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
          >
            <Github size={20} />
          </a>

          <a
            href="https://t.me/B_Pii"
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
          >
            <Send size={20} />
          </a>
        </nav>

        {/* ---------------- MOBILE BUTTON ---------------- */}
        <button
          className="mobile-btn"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mobile-menu"
          >
            <NavHashLink
              smooth
              to="/#skills"
              onClick={closeMenu}
              className="mobile-link"
            >
              {navText.skills}
            </NavHashLink>

            <NavHashLink
              smooth
              to="/#projects"
              onClick={closeMenu}
              className="mobile-link"
            >
              {navText.projects}
            </NavHashLink>

            <NavHashLink
              smooth
              to="/#contact"
              onClick={closeMenu}
              className="mobile-link"
            >
              {navText.contact}
            </NavHashLink>

            <div className="mobile-controls">
              <button
                onClick={() => {
                  toggleLang();
                  closeMenu();
                }}
                className="mobile-icon-btn text-bold"
              >
                {lang === "ru" ? "EN" : "RU"}
              </button>

              <button
                onClick={() => {
                  toggleTheme();
                  closeMenu();
                }}
                className="mobile-icon-btn"
              >
                {theme === "light" ? (
                  <Moon size={24} />
                ) : (
                  <Sun size={24} />
                )}
              </button>

              <a
                href="https://github.com/SovaD"
                target="_blank"
                rel="noreferrer"
                className="mobile-icon-btn"
              >
                <Github size={24} />
              </a>

              <a
                href="https://t.me/B_Pii"
                target="_blank"
                rel="noreferrer"
                className="mobile-icon-btn"
              >
                <Send size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;