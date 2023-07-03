import "./footer.css";
import {BsTelephone} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="logo-box">
          <a href="/pages/start" className="logo">
            Kamila Kowalczyk
          </a>
        </div>
        <nav className="nav-footer">
          <ul>
            <li>
              <a href="/pages/start" className="menu-item">
                Start
              </a>
            </li>
            <li>
              <a href="/pages/about" className="menu-item">
                O mnie
              </a>
            </li>
            <li>
              <a href="/pages/offer" className="menu-item">
                Oferta
              </a>
            </li>
            <li>
              <a href="/pages/faq" className="menu-item">
                FAQ
              </a>
            </li>
            <li>
              <a href="/pages/contact" className="menu-item">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
        <div className="contact-box">
          <h2>Skontaktuj się ze mną!</h2>
          <div className="contact-item">
            <BsTelephone size="24px" color="black" />
            <a href="tel:+48507070707">507 070 707</a>
          </div>
          <div className="contact-item">
            <HiOutlineMail size="24px" color="black" />
            <a href="mailto:kkamila.kowalczyk@gmail.com">kkamila.kowalczyk@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
