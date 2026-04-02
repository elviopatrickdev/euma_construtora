import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, logout } from "../services/auth";
import "./NavBar.css";
import logo from "../assets/logo.png";
import NavLinks from "./NavLinks";

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = getToken();

  const handleLinkClick = () => {
    setIsOpen(false); // Fecha o menu
  };

  const handlePainelClick = () => {
    if (token) {
      navigate("/paineladmin");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 w-full bg-white backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-full mx-auto px-4 sm:px-10 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/"><img src={logo} alt="Logo" className="h-12 sm:h-12" /></a>

        {/* Menu */}
        <div className="hidden absolute left-1/2 transform -translate-x-1/2 lg:flex justify-between items-center gap-8">
          <NavLinks className="link-nav" />
        </div>

        {/* Right buttons desktop */}
        <div className="flex justify-between items-center">

          <button
            onClick={handlePainelClick}
            className="btn-translate px-3.5 py-2 mr-4 rounded-full active:scale-95"
          >
            <lord-icon
              src="https://cdn.lordicon.com/umuwriak.json"
              trigger="loop"
              stroke="bold"
              delay="1500"
              colors="primary:#121212"
              style={{ width: "24px", height: "24px", marginTop: "6px" }}>
            </lord-icon>
          </button>
          {token && (
            <button onClick={handleLogout} className="btn-translate px-3.5 py-3.5 mr-4 rounded-full active:scale-95">
              Sair
            </button>
          )}

          <button className="orcamento hidden lg:flex items-center px-4 py-3 rounded-full cursor-pointer transition-all duration-300 ease-out hover:bg-[#5fa636] hover:shadow-xl active:scale-95" onClick={() => {

            const contactSection = document.getElementById("contact");

            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}>
            Orçamento Grátis
            <lord-icon
              src="https://cdn.lordicon.com/zubhquzc.json"
              trigger="loop"
              stroke="bold"
              delay="1500"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: '24px', height: '24px', marginLeft: '6px' }}
            ></lord-icon>
          </button>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-2xl ml-4 w-8 flex justify-center focus:outline-none transition-all duration-300 ease-out hover:shadow-xl active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute right-2 w-64 top-full text-left mt-1 px-6 py-4 space-y-4 bg-white shadow-lg rounded-lg animate-fade-in z-50">

          <NavLinks className="block link-nav-mobile mb-3 border-b border-gray-200" onClick={handleLinkClick} />

          <button className="orcamento flex items-center px-4 py-3 rounded-full cursor-pointer transition-all duration-300 ease-out hover:bg-[#5fa636] hover:shadow-xl active:scale-95" onClick={() => {

            const contactSection = document.getElementById("contact");

            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}>
            Orçamento Grátis
            <lord-icon
              src="https://cdn.lordicon.com/zubhquzc.json"
              trigger="loop"
              stroke="bold"
              delay="1500"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: '24px', height: '24px', marginLeft: '6px' }}
            ></lord-icon>
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;