import React, { useRef, useState, useEffect, useCallback, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import user from "../images/User.png";
import vec from "../images/Vector (2).png";
import emailIcon from "../images/E-mail icon.png";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface FormState {
  From_Name: string;
  From_Email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formState, setFormState] = useState<FormState>({
    From_Name: '',
    From_Email: '',
    message: '',
  });

  const {t} = useTranslation("global");

  const changeInputValue = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#con') {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_vllj368', 'template_3e45gbs', form.current, {
          publicKey: 'g2ovYw2PKmbXvMrt_',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <div className="contact" ref={sectionRef} id="con">
      <h3>{t("Contact.contp1")}</h3>
      <h3>{t("Contact.contp2")}</h3>
      <form ref={form} onSubmit={sendEmail}>
        <h4>{t("Contact.formhed")}</h4>
        <div className="name">
          <label>{t("Contact.name")}</label>
          <div className="name-cont">
            <img src={user} style={{ width: "18px", height: "20px", marginLeft: "7px" }} alt="User Icon" />
            <input type="text" name="From_Name" value={formState.From_Name} onChange={changeInputValue} />
          </div>
        </div>
        <div className="email">
          <label>{t("Contact.email")}</label>
          <div className="email-cont">
            <img src={emailIcon} style={{ width: "22px", height: "18px", marginLeft: "5px" }} alt="Email Icon" />
            <input type="email" name="From_Email" value={formState.From_Email} onChange={changeInputValue} />
          </div>
        </div>
        <div className="message">
          <label>{t("Contact.message")}</label>
          <div className="message-cont">
            <textarea name="message" value={formState.message} onChange={changeInputValue} />
          </div>
        </div>
        <div className="send">
          <input type="submit" value={t("Contact.button")} />
          <img src={vec} alt="Send Icon" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
