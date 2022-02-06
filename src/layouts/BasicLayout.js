import { Fragment, useContext } from "react";
import logo from "../assets/system/logo.svg";
import Image from "../components/Image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "../styles/layouts/BasicLayout.module.scss";
import "../styles/layouts/index.css";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageContext from "../contexts/PageContext";
import Title from "../components/Title";
import { whiteColor } from "../constants/color";

export default function BasicLayout({ children }) {
  const { isMobile } = useContext(PageContext);
  return (
    <Fragment>
      {/* <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <NavLink exact to="/" style={{ borderBottom: 'none' }}>
            <img src={logo} alt="Logo" width={50} height={40} />
          </NavLink>  
          <h1>Axeso</h1>
        </div>
        <ul>
          <li>
            <NavLink exact to="/nosotros" activeClassName="active">Nosotros</NavLink>
          </li>
          <li>
            <NavLink exact to="/proyectos" activeClassName="active">Proyectos</NavLink> 
          </li>
          <li>
            <NavLink exact to="/blog" activeClassName="active">Blog</NavLink> 
          </li>
          <li>
            <NavLink exact to="/contactanos" activeClassName="active">Contactános</NavLink> 
          </li>
        </ul>
      </nav> */}
      <NavBar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          {/* <Image name="logo_white" width={150} height={160} /> */}
          <Image
            name={isMobile ? "logo_mobile" : "logo_mobile"}
            width={50}
            height={60}
          />
          <Title text="Axeso" size={36} color={whiteColor}/>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerInformation}>
            <div className={styles.informationContact}>
              <div className={styles.contactTitle}>Escríbenos a</div>
              <div className={styles.email}>contacto@axesoapp.com</div>
              <div className={styles.informationNumbers}>
                <div>+51 975703863</div>
                <div>+51 932625455</div>
              </div>
            </div>
            <div className={styles.informationDirection}>Lima, Perú</div>
          </div>
          <div className={styles.footerSocialMedia}>
            <div
              onClick={() =>
                window.open("https://www.facebook.com/Axesoperu", "_blank")
              }
            >
              <FaFacebook size="30px" />
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/axesoapp",
                  "_blank"
                )
              }
            >
              <FaLinkedin size="30px" />
            </div>
            <div
              onClick={() =>
                window.open("https://instagram.com/axeso.peru", "_blank")
              }
            >
              <FaInstagram size="30px" />
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
