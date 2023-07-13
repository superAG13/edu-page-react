import "./faq.css";
// import { useState } from "react";
function Faq() {
  const content = document.querySelector(".faq-content");
  //read faq.json
  fetch("./src/data/faq.json")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      data.forEach((item) => {
        // console.log(item);
        const faq = document.createElement("div");
        faq.classList.add("faq-item");
        faq.innerHTML = `
        <div class="faq-question">
          <h3>${item.question}</h3>
          <span class="faq-icon">
            <i class="fas fa-chevron-down"></i>
          </span>
        </div>
        <div class="faq-answer">
          <p>${item.answer}</p>
        </div>
        `;
        content.appendChild(faq);
      });
    });

  return (
    <div className="faq">
      <div className="container">
        <h1>FAQ</h1>
        <div className="faq-content"></div>
      </div>
    </div>
  );
}

export default Faq;
