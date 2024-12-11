"use client";
import React, { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Fungsi untuk scroll ke section
  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Fungsi untuk update menu aktif berdasarkan scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let currentSection = "hero";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          onClick={() => handleScrollToSection("hero")}
          className={`nav-item ${
            activeSection === "hero" ? "bg-white text-gray-900" : ""
          }`}
        >
          Home
        </button>
        <button
          onClick={() => handleScrollToSection("projects")}
          className={`nav-item ${
            activeSection === "projects" ? "bg-white text-gray-900" : ""
          }`}
        >
          Projects
        </button>
        {/* <button
          onClick={() => handleScrollToSection("testimonials")}
          className={`nav-item ${
            activeSection === "testimonials" ? "bg-white text-gray-900" : ""
          }`}
        >
          Testimonials
        </button> */}
        <button
          onClick={() => handleScrollToSection("about")}
          className={`nav-item ${
            activeSection === "about" ? "bg-white text-gray-900" : ""
          }`}
        >
          About
        </button>
        <button
          onClick={() => handleScrollToSection("contact")}
          className={`nav-item ${
            activeSection === "contact" ? "bg-white text-gray-900" : ""
          }`}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
