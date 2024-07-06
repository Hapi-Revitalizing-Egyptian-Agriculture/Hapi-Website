import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/LOGOFILLED.png';
import git from '../images/github (2).png';
import facebook from '../images/facebook (1).png';
import x from '../images/X.png';
import email from "../images/email (1).png";
import num from "../images/call (1).png";

import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const {t} = useTranslation("global");
    
  const handleButtonClick = () => {
    navigate('/About#con');
  }
    
  const handleFAQClick = () => {
    navigate('/About#FAQ');
  }

  return (
    <div className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li><Link style={{ textDecoration: "none", color: "" }} to="/About">{t("Footer.about")}</Link></li>
          <li onClick={handleButtonClick}>{t("Footer.contact")}</li>
          <li onClick={handleFAQClick}>{t("Footer.faq")}</li>
          <li>{t("Footer.policy")}</li>
        </ul>
      </div>
      <div className="footer-right">
        <div className="footer-right-top">
          <h3>{t("Footer.follow")}</h3>
          <div className="ico">
            <img src={git} alt="GitHub" />
            <img src={facebook} alt="Facebook" />
            <img src={x} alt="X" />
          </div>
        </div>
        <div className="footer-right-bottom">
          <h3>{t("Footer.contact")}</h3>
          <div className="em">
            <img src={email} alt="Email" />
            <a href="mailto:Hapi.Help@gmail.com">Hapi.Help@gmail.com</a>
          </div>
          <div className="num">
            <img src={num} alt="Phone" />
            <p>+2 000 000 000 00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
