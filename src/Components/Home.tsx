import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBar from "./NavBar.tsx";
import ScrollableComponent from "./ScrollableList.tsx";
import Footer from "./Footer.tsx";
import logo from "../images/LOGOFILLED.png";
import preview from "../images/Preview.png";
import irr from "../images/irrigation icon (1).png";
import recommend from "../images/plant.png";
import dis from "../images/pest icon (1).png";
import Lib from "../images/Group (1).png";
import vegetables from "../images/Veggies' box anim.png";

const Home: React.FC = () => {
    const [t] = useTranslation("global");
    const navBarRef = useRef<HTMLDivElement>(null);

    return (
        <div className='main'>
            <NavBar ref={navBarRef} initialActiveTab="home" />
            <div className="home-header">
                <div className="header-left-sec-top">
                    <img src={logo} alt="HAPI logo" className="logo" />
                    <p>Revitalizing<br /> Egyptian Agriculture<br /> with smart solutions</p>
                </div>
                <div className="preview">
                    <img src={preview} alt="Preview" />
                    <Link to="https://www.youtube.com/watch?v=nJzjUrvz0p4" style={{ textDecoration: "none" }}>
                        <p>{t("Home.preview")}</p>
                    </Link>
                </div>
            </div>
            <div className="offer">
                <h3>{t("Home.offer")}</h3>
                <div className="offer-up">
                    <div className="irr">
                        <img src={irr} alt="Irrigation" />
                        <p>{t("Home.irr")}</p>
                    </div>
                    <div className="recommend">
                        <img src={recommend} alt="Recommendation" />
                        <p>{t("Home.recommend")}</p>
                    </div>
                </div>
                <div className="offer-down">
                    <div className="dis">
                        <img src={dis} alt="Diseases" />
                        <p>{t("Home.disease")}</p>
                    </div>
                    <div className="Lib">
                        <img src={Lib} alt="Library" />
                        <p>{t("Home.library")}</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className="vision">
                <div className="vision-left">
                    <h3>{t("Home.vision")}</h3>
                    <p>{t("Home.visionp")}</p>
                </div>
                <div className="vision-right">
                    <img src={vegetables} alt="Vegetables" />
                </div>
            </div>
            <hr style={{ width: "55%", color: "#d7cc96" }} />
            <ScrollableComponent />
            <Footer />
        </div>
    );
};

export default Home;
