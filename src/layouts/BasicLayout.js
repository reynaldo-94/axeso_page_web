import { Fragment, useContext } from "react";
import Image from "../components/Image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "../styles/layouts/BasicLayout.module.scss";
import "../styles/layouts/index.css";
import NavBar from "../components/NavBar";
import PageContext from "../contexts/PageContext";
import Title from "../components/Title";
import { whiteColor } from "../constants/color";

export default function BasicLayout({ children }) {
  const { isMobile } = useContext(PageContext);
  return (
    <Fragment>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          {/* <Image name="logo_white" width={150} height={160} /> */}
          <div className={styles.footerLogoContainer}>
            <Image
              name={isMobile ? "logo_mobile" : "logo_mobile"}
              width={50}
              height={60}
            />
            <Title text="Axeso" size={36} color={whiteColor} />
          </div>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerInformation}>
            <div className={styles.informationContact}>
              <div className={styles.contactTitle}>Escríbenos a</div>
              <div className={styles.email}>contacto@axesoapp.com</div>
              <div className={styles.informationNumbers}>
                <div>+51 975703863</div>
                <div>/</div>
                <div>932625455</div>
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
