import "./offer.css";
import {BsPerson, BsPeople} from "react-icons/bs";
function Offer() {
  return (
    <div className="offer">
      <div className="container">
        <h1>Oferta</h1>
        <div className="offer-text-box">
          <span className="part first-part">
            Oferuję zajęcia indywidualne,w parach oraz grupowe, dostosowane do potrzeb uczniów w każdym wieku i na różnym poziomie zaawansowania.
          </span>
          <span className="part second-part">
            Od kilku lat przygotowuje uczniów do egzaminu ósmoklasisty oraz matury z języka angielskiego. Na zajęciach stawiam na rozwój wszystkich umiejętności
            językowych, a także na przygotowanie do sytuacji komunikacyjnych z życia codziennego. Staram się prowadzić lekcje w sposób interesujący i przystępny dla
            każdego ucznia, aby uczynić naukę języka angielskiego przyjemną i skuteczną.
          </span>
          <span className="part third-part">Zajęcia odbywają się w formie lekcji online, w dogodnym dla Ciebie terminie.</span>
        </div>
        <div className="offer-container">
          <div className="offer-box">
            <BsPerson size="52px" color="#736ced" />
            <h2>Indywidualne</h2>
            <div className="price">
              <strong>55-70</strong>
              <span>
                zł
                <small>/os</small>
              </span>
            </div>
            <div className="offer-text-box">
              <ul>
                <li className="offer-item">Indywidualne podejście do każdego ucznia</li>
                <li className="offer-item">Nauka gramatyki, słownictwa oraz wymowy</li>
                <li className="offer-item">Ciekawe konwersacje na różne tematy</li>
                <li className="offer-item">
                  <a href="/contact" className="btn offer-btn">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="offer-box">
            <BsPeople size="52px" color="#736ced" />
            <h2>Grupowe</h2>
            <div className="price">
              <strong>45-60</strong>
              <span>
                zł
                <small>/os</small>
              </span>
            </div>
            <div className="offer-text-box">
              <ul>
                <li className="offer-item">Przełamywanie barier językowych podczas rozmów </li>
                <li className="offer-item">Przygotowanie do sytuacji komunikacyjnych z życia codziennego</li>
                <li className="offer-item">Większa motywacja i dyscyplina do nauki</li>
                <li className="offer-item">
                  <a href="/contact" className="btn offer-btn">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
