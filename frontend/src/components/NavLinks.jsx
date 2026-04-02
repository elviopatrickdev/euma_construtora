import { HashLink as Link } from "react-router-hash-link";

function NavLinks({ className = "" }) {
  return (
    <>
      <Link className={className} smooth to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
      <Link className={className} smooth to="/#services">Serviços</Link>
      <Link className={className} smooth to="/#about">Sobre nós</Link>
      <Link className={className} smooth to="/#destaques">Destaques</Link>
      <Link className={className} smooth to="/#testimonials">Testemunhos</Link>
      <Link className={className} smooth to="/#faqs">Faqs</Link>
      <Link className={className} smooth to="/#contact">Contacto</Link>
    </>
  );
}

export default NavLinks;