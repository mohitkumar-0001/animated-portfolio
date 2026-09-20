import { useEffect, useState } from "react";
import "./Nav.css";

const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    // { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
];

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 30);

        const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

        let currentSection = "home";

        sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }
    });

        setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  const handleResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <button
          className="nav-logo"
          onClick={() => handleNavigation("home")}
          aria-label="Go to homepage"
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Mohit</span>
          <span className="logo-bracket">/&gt;</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => handleNavigation(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="resume-btn" onClick={handleResume}>
          <span>Resume</span>
          <span className="resume-arrow">↗</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => handleNavigation(item.id)}
            >
              <span>{item.name}</span>
              <span className="mobile-arrow">↗</span>
            </button>
          ))}

          <button className="mobile-resume-btn" onClick={handleResume}>
            Download Resume
            <span>↓</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Nav;