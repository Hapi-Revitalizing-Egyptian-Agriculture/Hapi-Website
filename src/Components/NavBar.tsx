import React, { useState, forwardRef, RefObject, MouseEvent } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from '../images/LOGOFILLED.png';
import menu from "../images/MENUFRAME.png"; 
import lang from"../images/internet.png";

interface NavBarProps {
    initialActiveTab: string;
}

const NavBar = forwardRef<HTMLDivElement, NavBarProps>((props, ref) => {
    const navigate = useNavigate();
    const [t,i18n] = useTranslation("global");
    const [activeTab, setActiveTab] = useState<string>(props.initialActiveTab);

    const [isRTL, setIsRTL] = useState(false);

    const setRTL = (lang: string) => {
      setIsRTL(true);
      document.documentElement.dir = 'rtl';
      i18n.changeLanguage(lang)
      .then(() => console.log(`Language changed to ${lang}`))
      .catch((err) => console.error(`Failed to change language to ${lang}:`, err));
    };
  
    const setLTR = (lang: string) => {
      setIsRTL(false);
      document.documentElement.dir = 'ltr';
      i18n.changeLanguage(lang)
      .then(() => console.log(`Language changed to ${lang}`))
      .catch((err) => console.error(`Failed to change language to ${lang}:`, err));
    };

    const handleButtonClick = () => {
        navigate('/About#con');
    };

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="fixed">
            <div className="nav-content" ref={ref as RefObject<HTMLDivElement>}>
                <div className="nav-cont-left">
                    <Link to="/" className="nav-brand" style={{ textDecoration: "none" }}>
                        <img src={logo} alt="HAPI logo" height="100%" />
                    </Link>
                    <ul className="nav-links">
                        <NavLink className={activeTab === 'home' ? 'active' : 'tab'} to="/" style={{ textDecoration: "none" }} onClick={() => handleTabClick('home')}>
                            {t("NavBar.link1")}
                        </NavLink>
                        <NavLink className={activeTab === 'library' ? 'active' : 'tab'} to="/Library" style={{ textDecoration: "none" }} onClick={() => handleTabClick('library')}>
                            {t("NavBar.link2")}
                        </NavLink>
                        <NavLink className={activeTab === 'about' ? 'active' : 'tab'} to="/About" style={{ textDecoration: "none" }} onClick={() => handleTabClick('about')}>
                            {t("NavBar.link3")}
                        </NavLink>
                    </ul>
                </div>
                <div className="nav-cont-right">
                    <button onClick={handleButtonClick} className="get-started-but">{t("NavBar.button")}</button>
                        <div id="lang" className='btn-group dropdown'>
                            <button type="button"  className="btn" data-bs-toggle="dropdown" aria-expanded="false" >
                            <span style={{ backgroundColor: "#E7DEB3", color: "#016451", borderRadius: "10px", padding: "5px" }}><img  style={{marginBottom:"3px"}} alt="..." src={lang}/></span>
                            </button>
                            <ul style={{backgroundColor:"#E7DEB3", color: "#016451"}} className="dropdown-menu">
                                <li><Link onClick={() =>setLTR("en")}>English</Link></li>
                                <li><Link onClick={() =>setRTL("ar")}>عربي</Link></li>
                            </ul>
                        </div>
                        <div id="side" className="btn-group dropdown">
                            <button type="button" style={{margin:"auto",marginBottom:"10px", height:"40px"}} className="btn" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={menu} style={{marginBottom:"10px"}} alt="..."/> 
                            </button>
                            <ul className="dropdown-menu custom-dropdown-menu">
                                <li><Link style={{textDecoration:"none"}} className="dropdown-item" type="button" to="/">{t("NavBar.link1")}</Link></li>
                                <li><Link style={{textDecoration:"none"}} className="dropdown-item" type="button" to="/Library">{t("NavBar.link2")}</Link></li>
                                <li><Link style={{textDecoration:"none"}} className="dropdown-item" type="button" to="/About">{t("NavBar.link3")}</Link></li>
                                <hr/>
                                <li><Link style={{textDecoration:"none"}} className="dropdown-item" type="button" onClick={() =>setLTR("en")}>English</Link></li>
                                <li><Link style={{textDecoration:"none"}} className="dropdown-item" type="button" onClick={() =>setRTL("ar")}>عربي</Link></li>
                            </ul>
                        </div> 
                </div>

            </div>
        </div>
    );
});

export default NavBar;
