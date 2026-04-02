import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import FooterImg from "../assets/footer-img.png";
import FooterLogo from "../assets/logo.png";
import NavLinks from "./NavLinks"; // 
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer flex flex-col justify-center w-full mx-auto px-4 pt-20">
      <div className="relative">
        <img className="footer-img rounded-4xl w-full h-70 object-cover" src={FooterImg} alt="Footer Image" />
        <p className="footer-img-text absolute bottom-8 left-12 text-white drop-shadow-lg text-5xl">
          Pronto para começar <br /> a construir com a EUMA?
        </p>
      </div>

      <div className="footer-content mt-6 flex flex-col md:flex-row justify-between mx-8 min-h-60">
        <div className='flex flex-col items-center md:items-start justify-between'>
          <img className="w-12 mb-4" src={FooterLogo} alt="Footer Logo" />
          <div>
            <p className='mb-2 font-bold text-center md:text-start'>Siga-nos:</p>
            <div className="social-icons flex mb-6 space-x-2 text-2xl">
              <a href="#" className="social-link">
                <lord-icon
                  src="https://cdn.lordicon.com/bfoumeno.json"
                  trigger="hover"
                  stroke="bold"
                  delay="1500"
                  colors="primary:#71BC42"
                  style={{ width: '30px', height: '30px' }}
                ></lord-icon>
              </a>
              <a href="#" className="social-link">
                <lord-icon
                  src="https://cdn.lordicon.com/tgyvxauj.json"
                  trigger="hover"
                  stroke="bold"
                  delay="1500"
                  colors="primary:#71BC42,secondary:#121331"
                  style={{ width: '30px', height: '30px' }}
                ></lord-icon>
              </a>
              <a href="#" className="social-link">
                <lord-icon
                  src="https://cdn.lordicon.com/qgebwute.json"
                  trigger="hover"
                  stroke="bold"
                  delay="1500"
                  colors="primary:#71BC42,secondary:#71BC42"
                  style={{ width: '30px', height: '30px' }}
                ></lord-icon>
              </a>
              <a href="#" className="social-link">
                <lord-icon
                  src="https://cdn.lordicon.com/dnphlhar.json"
                  trigger="hover"
                  stroke="bold"
                  delay="1500"
                  colors="primary:#71BC42,secondary:#121331"
                  style={{ width: '30px', height: '30px' }}
                ></lord-icon>
              </a>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-8 lg:gap-20 text-center md:text-start'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold md:mb-3'>Contacto</p>
            <p>
              <lord-icon
                src="https://cdn.lordicon.com/onmwuuox.json"
                trigger="hover"
                stroke="bold"
                delay="1500"
                colors="primary:#121331,secondary:#121331"
                style={{ width: '22px', height: '22px', marginRight: '5px', marginBottom: '-6px' }}
              ></lord-icon>
              <span className='text-gray-600'>Boavista, Cabo Verde</span></p>
            <p>
              <lord-icon
                src="https://cdn.lordicon.com/dnphlhar.json"
                trigger="hover"
                stroke="bold"
                delay="1500"
                colors="primary:#121331,secondary:#121331"
                style={{ width: '18px', height: '18px', marginRight: '4px', marginLeft: '2px' , marginBottom: '-4px' }}
              ></lord-icon>
              <span className='text-gray-600'>+238 992 93 33</span></p>
            <p>
              <lord-icon
                src="https://cdn.lordicon.com/ozlkyfxg.json"
                trigger="hover"
                stroke="bold"
                delay="1500"
                colors="primary:#121331,secondary:#121331"
                style={{ width: '20px', height: '20px', marginRight: '5px', marginBottom: '-4px' }}
              ></lord-icon>
              <span className='text-gray-600'>info@euma.cv</span></p>
          </div>

          <div>
            <p className='font-bold mb-3'>Links Rápidos</p>
            <ul className='flex flex-col gap-2'>
              <NavLinks className="footer-link" />
            </ul>
          </div>

          <div>
            <ul className='flex flex-col gap-2'>
              <p className='font-bold mb-3'>Serviços</p>
              <li className='text-gray-600'>Orçamento e Planejamento</li>
              <li className='text-gray-600'>Execução de Obras</li>
              <li className='text-gray-600'>Fiscalização</li>
              <li className='text-gray-600'>Elaboração de Projeto</li>
              <li className='text-gray-600'>Avaliação de Imóveis</li>
              <li className='text-gray-600'>Reformas e Ampliações</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-rights flex flex-col items-center justify-center text-center border-t border-gray-300 py-2 mt-6 md:mt-1'>
        <p>© 2026 EUMA | Engenharia e Construção, Lda. Todos os direitos reservados.</p>
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/elviopatrickdev" target="_blank" rel="noreferrer">Elvio Patrick
          <lord-icon
            src="https://cdn.lordicon.com/gsjfryhc.json"
            trigger="loop"
            stroke="bold"
            delay="1500"
            colors="primary:#71BC42,secondary:#121331"
            style={{ width: '14px', height: '14px', marginLeft: '5px' }}
          ></lord-icon>
        </a></p>
      </div>
    </footer>
  );
}

export default Footer;