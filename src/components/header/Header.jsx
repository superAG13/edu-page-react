import "./header.css";

function Header() {
  return (
    <>
      <header className="main-header">
        <div className="container">
          <div className="logo-box">
            <a href="/pages/start" className="logo">
              Kamila Kowalczyk
            </a>
          </div>
          <nav className="main-nav">
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
              {/* <li>
                <a href="/pages/login" className="btn menu-btn">
                  Zaloguj się
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
