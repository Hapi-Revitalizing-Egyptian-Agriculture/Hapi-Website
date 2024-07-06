import React, { useRef, useEffect } from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
import { useDraggable } from 'react-use-draggable-scroll';
import { useTranslation } from 'react-i18next';

const ScrollableComponent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {t} = useTranslation("global");
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { events } = useDraggable(ref as React.MutableRefObject<HTMLDivElement>);

  useEffect(() => {
    if (location.hash === '#plan' && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const handleButtonClick = () => {
    navigate('/About#con');
  };

  return (
    <div
      className="flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide user-plans"
      {...events}
      ref={ref}
    >
      <h3>{t("Scroll.plans")}</h3>
      <div className="plans" ref={sectionRef} id="plan" style={{ width: '100%', overflowX: 'scroll', whiteSpace: 'nowrap' }}>
        <div className="plan">
          <div className="plan-top plan-top1">
            <p>{t("Scroll.guest")}</p>
            <h3>{t("Scroll.Free")}</h3>
            <hr style={{ width: "90%", height: "4px", color: "#017D65" }} />
            <ul>
              <li>{t("Scroll.limit1")}</li>
            </ul>
          </div>
          <button onClick={handleButtonClick}>{t("Scroll.button1")}</button>
        </div>
        <div className="plan">
          <div className="plan-top">
            <p>{t("Scroll.basic")}</p>
            <h3>{t("Scroll.price2")}</h3>
            <hr style={{ width: "90%", height: "4px", color: "#017D65" }} />
            <ul>
              <li>{t("Scroll.limit21")}</li>
              <li>{t("Scroll.limit22")}</li>
            </ul>
          </div>
          <button onClick={handleButtonClick}>{t("Scroll.button")}</button>
        </div>
        <div className="plan">
          <div className="plan-top plan-top3">
            <p>{t("Scroll.pro")}</p>
            <h3>{t("Scroll.price3")}</h3>
            <hr style={{ width: "90%", height: "4px", color: "#017D65" }} />
            <ul>
              <li>{t("Scroll.limit31")}</li>
              <li>{t("Scroll.limit32")}</li>
              <li>{t("Scroll.limit33")}</li>
            </ul>
          </div>
          <button onClick={handleButtonClick}>{t("Scroll.button")}</button>
        </div>
        <div className="plan">
          <div className="plan-top plan-top4">
            <p>{t("Scroll.ultimate")}</p>
            <h3>{t("Scroll.price4")}</h3>
            <hr style={{ width: "90%", height: "4px", color: "#017D65" }} />
            <ul>
              <li>{t("Scroll.limit41")}</li>
              <li>{t("Scroll.limit42")}</li>
              <li>{t("Scroll.limit43")}</li>
            </ul>
          </div>
          <button onClick={handleButtonClick}>{t("Scroll.button")}</button>
        </div>
      </div>
    </div>
  );
}

export default ScrollableComponent;
