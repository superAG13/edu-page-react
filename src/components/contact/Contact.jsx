import "./contact.css";
import {useState} from "react";
function Contact() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.firstName && formValues.lastName && formValues.email && formValues.phone && formValues.message) {
      alert("Dziękuję za wiadomość! Skontaktuję się z Tobą jak najszybciej.");
    } else {
      alert("Proszę wypełnić wszystkie pola!");
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="contact">
      <div className="container">
        <h1>Kontakt</h1>
        <div className="contact-content">
          <span className="part first-part">
            Jeśli masz jakieś dodatkowe pytania, zapraszam do kontaktu, abyśmy mogli omówić szczegóły i ustalić plan nauki, który pomoże Ci osiągnąć Twoje cele językowe.
          </span>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="firstName">
              <input type="text" name="firstName" placeholder="Imię" value={formValues.firstName} onChange={handleChange} />
            </div>
            <div className="lastName">
              <input type="text" name="lastName" placeholder="Nazwisko" value={formValues.lastName} onChange={handleChange} />
            </div>
            <div className="email">
              <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
            </div>
            <div className="phone">
              <input type="tel" name="phone" placeholder="Telefon" value={formValues.phone} onChange={handleChange} />
            </div>
            <div className="message">
              <textarea name="message" placeholder="Wiadomość" value={formValues.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-submit">
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
