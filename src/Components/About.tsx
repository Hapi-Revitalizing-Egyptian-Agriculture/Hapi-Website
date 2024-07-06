import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";
import ContactUs from "./Contact.tsx";
import mark from "../images/question mark.png";
import closed from "../images/arrow.png";
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const {t} = useTranslation("global");

  useEffect(() => {
    if (location.hash === "#FAQ") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data: { question: string; answer: string }[] = [
    {
      question: t("About.q1"),
      answer:
        t("About.a1")
    },
    {
      question: t("About.q2"),
      answer:
      t("About.a2")
    },
    {
      question: t("About.q3"),
      answer:
      t("About.a3")
    },
    {
      question: t("About.q4"),
      answer:
      t("About.a4")
    }
  ];

  return (
    <div className="main">
      <NavBar />
      <div className="our-story">
        <h3>{t("About.story")}</h3>
        <p>
          {t("About.storyp1")}
        </p>
        <p>
          {t("About.storyp2")}
        </p>
      </div>
      <hr style={{ width: "60%", margin: "auto", color: "#d7cc96" }} />
      <div className="FAQ" id="FAQ" ref={sectionRef}>
        <h3>{t("About.faqp")}</h3>
        <div className="faq-cont">
          <div className="wrapper">
            <div className="accordion">
              {data.map((item, i) => (
                <div className="item" key={i}>
                  <div className="title" onClick={() => toggle(i)}>
                    <h4>{item.question}</h4>
                    <img src={closed} alt="Toggle" />
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img className="marko" src={mark} alt="Question mark" />
        </div>
      </div>
      <hr style={{ width: "60%", margin: "auto", color: "#d7cc96" }} />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default About;


