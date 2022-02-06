import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Arrow from "../components/Arrow";
import Button from "../components/Button";
import FirstContentPage from "../components/FirstContentPage";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import { whiteColor } from "../constants/color";
import { fontSecundary_1 } from "../constants/fonts";
import {
  fontSizeParagraphDesktop,
  fontSizeParagraphMobile,
  fontSizeTitleDesktopMedium,
  fontSizeTitleDesktopBig,
  fontSizeTitleMobilie,
} from "../constants/fontSize";
import { ourServicesData, wishListData } from "../constants/pages/HomePage";
import PageContext from "../contexts/PageContext";
import styles from "../styles/pages/HomePage.module.scss";

let listRowCard = [];
const numberRowsCard = Math.ceil(ourServicesData.length / 2);
for (let index = 0; index < numberRowsCard; index++) {
  console.log("index", index);
  listRowCard.push(index);
}

const { content, title_line_1, title_line_2, image } = {
  content:
    "Encontramos la mejor manera de dar forma a soluciones digitales  cocreando  experiencias integrales y orientadas a un propósito.",
  title_line_1: "Tu tienes la visión,",
  title_line_2: "nosotros la tecnología",
  image: "front_page",
};

export default function HomePage() {
  const navigate = useNavigate();
  const { isMobile } = useContext(PageContext);

  return (
    <>
      <FirstContentPage
        title_line_1={title_line_1}
        title_line_2={title_line_2}
        content={content}
        image={image}
      />
      {/* <div className={styles.welcomePage}>
        <div className={styles.welcomePageContent}>
          <div className={styles.welcomePageInformation}>
            <Title
              text=""
              size={isMobile ? fontSizeTitleMobilie : fontSizeTitleDesktopBig}
            >
              Tu tienes la visión, <br />
              nosotros la tecnología
            </Title>
            <Paragraph
              content={
                "Encontramos la mejor manera de dar forma a soluciones digitales  cocreando  experiencias integrales y orientadas a un propósito."
              }
              size={
                isMobile ? fontSizeParagraphMobile : fontSizeParagraphDesktop
              }
            />
          </div>
          {!isMobile && (
            <div
              onClick={(event) => {
                window.location = "#services";
                event.stopImmediatePropagation();
              }}
              className={styles.arrowDownIcon}
            >
              <FaArrowDown size={30} className={"arrow-down-border"} />
            </div>
          )}
        </div>
        <div className={styles.imgFrontPage}>
          <Image
            name={isMobile ? "front_page_mobile" : "front_page_desktop"}
            extension="jpg"
          />
        </div>
        {isMobile && (
          <div
            onClick={(event) => {
              window.location = "#services";
              event.stopImmediatePropagation();
            }}
            className={styles.arrowDownIcon}
          >
            <FaArrowDown size={30} className={"arrow-down-border"} />
          </div>
        )}
      </div> */}
      <div id="services" className={styles.ourServices}>
        <Title
          text="Nuestros Servicios"
          color={whiteColor}
          size={isMobile ? fontSizeTitleMobilie : fontSizeTitleDesktopMedium}
        />
        <div className={styles.ourServicesBody}>
          {ourServicesData.map((el, index) => {
            return (
              <div key={index} className={styles.ourServicesCard}>
                <div className={styles.ourServicesCardBody}>
                  <div className={styles.servicesImage}>
                    <Image name={el.image} width={80} height={94} />
                  </div>
                  <Title text={el.title} size={24} color={whiteColor} />
                  <Paragraph content={el.text} />
                </div>
                <Arrow
                  label="Más Info"
                  typeColor="white"
                  font={fontSecundary_1}
                  underline={true}
                  onClick={() => {
                    navigate(`/${el.moreInfoPath}`);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.ourServicesFooter}>
          <Link to="/contactanos">
            <Button text="Conversemos" arrow={true} borderRadius={8} />
          </Link>
        </div>
      </div>
      <div className={styles.wishList}>
        <div className={styles.wishListHeader}>
          <Title
            text="Nuestra lista de deseos"
            size={isMobile ? fontSizeTitleMobilie : fontSizeTitleDesktopMedium}
          />
          {!isMobile && (
            <Paragraph
              content={
                "Estamos convencidos que la tecnologia transforma realidades. Estos son algunos de los desafíos que nos gustaria resolver juntos:"
              }
              size={
                isMobile ? fontSizeParagraphMobile : fontSizeParagraphDesktop
              }
            />
          )}
        </div>
        <div className={styles.wishListBody}>
          {wishListData.map((el, key) => {
            return (
              <div key={key} className={styles.wishListCard}>
                <div className={styles.wishListCardBody}>
                  <div className={styles.servicesImage}>
                    <Image
                      name={el.image.name}
                      width={el.image.width}
                      height={el.image.height}
                    />
                  </div>
                  <Title
                    text={el.title}
                    size={
                      isMobile
                        ? fontSizeTitleMobilie
                        : fontSizeTitleDesktopMedium
                    }
                  />
                  <Paragraph
                    content={el.text}
                    size={
                      isMobile
                        ? fontSizeParagraphMobile
                        : fontSizeParagraphDesktop
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.wishListFooter}>
          <Link to="/contactanos">
            <Button text="Conversemos" arrow={true} borderRadius={8} />
          </Link>
        </div>
      </div>
    </>
  );
}
