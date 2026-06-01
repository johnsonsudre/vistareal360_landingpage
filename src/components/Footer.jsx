import { Link } from 'react-router-dom'

const WHATSAPP = 'https://wa.me/5527999087595'
const INSTAGRAM = 'https://instagram.com/vistareal360'

export default function Footer() {
  return (
    <footer className="footer" aria-label="Rodapé">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/images/VISTA REAL 360 - logo com slogan.png"
            alt="Vista Real 360 — Não é imagem, é percepção de valor"
            loading="lazy"
          />
          <p className="footer-brand-desc">
            Tecnologia que transforma visitas em vendas — da captação imersiva ao atendimento inteligente.
          </p>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Serviços</span>
          <div className="footer-links">
            <Link to="/tourvirtual360" className="footer-link">Tour Virtual 360°</Link>
            <Link to="/agente_ia" className="footer-link">Agente de IA</Link>
          </div>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Contato</span>
          <p className="footer-contact-item">
            Serra – ES<br />
            Grande Vitória e interior do ES
          </p>
          <p className="footer-contact-item">
            <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="WhatsApp (27) 99908-7595">
              <i className="fab fa-whatsapp" aria-hidden="true"></i> (27) 99908-7595
            </a>
          </p>
          <div className="footer-social">
            <a href={INSTAGRAM} target="_blank" rel="noopener" aria-label="Instagram da Vista Real 360">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        &copy; 2026 Vista Real 360. Todos os direitos reservados.
      </div>
    </footer>
  )
}
