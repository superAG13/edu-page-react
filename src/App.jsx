import "./App.css";
import Header from "./components/header/Header";
// import Main from "./components/main/Main";
import About from "./components/about/About";
import Offer from "./components/offer/Offer";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <About />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
