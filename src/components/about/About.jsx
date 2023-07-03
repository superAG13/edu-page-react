import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="container">
        <h1>O mnie</h1>
        <div className="about-content">
          <div className="about-text-box">
            <span className="part first-part">
              Cześć! Jestem Kamila i jestem nauczycielką języka angielskiego. Moja przygoda z językiem zaczęła się już w dzieciństwie. Wychowywałam się w Anglii, uczyłam
              się w szkołach dwujęzycznych, a niedawno ukończyłam studia na kierunku filologia angielska na Uniwersytecie Szczecińskim.
            </span>
            <span className="part second-part">
              Od 2019 roku zajmuję się nauką języka angielskiego. Podczas pracy w szkołach językowych miałam okazję nauczać różne grupy wiekowe. Pracowałam z dziećmi,
              młodzieżą oraz dorosłymi, prowadząc zarówno lekcje indywidualne jak i grupowe. Prowadząc zajęcia, miałam możliwość dostosowania programu nauczania do
              potrzeb i celów moich uczniów. Skupiałam się na rozwijaniu umiejętności komunikacyjnych, budowaniu pewności siebie w mówieniu i zrozumieniu języka
              angielskiego oraz na poszerzaniu słownictwa. W ciągu tych lat zdobyłam cenne doświadczenie w nauczaniu języka angielskiego oraz widziałam, jak moi uczniowie
              osiągają postępy i nabierają pewności w używaniu języka.
            </span>
            <span className="part third-part">
              Prywatnie uwielbiam podróżować i poznawać nowe kultury. W wolnym czasie lubię oglądać seriale, słuchać muzyki, czytać książki, a także uprawiać sport. Wolny
              czas to dla mnie również okazja do spędzania czasu z rodziną i przyjaciółmi.
            </span>
          </div>
          <div className="about-img-box">
            <img src="src/assets/about.png" alt="Kamila Kowalczyk" className="about-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
