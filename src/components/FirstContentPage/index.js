import { useContext } from "react";
import { FaArrowDown } from "react-icons/fa";
import {
  fontSizeParagraphDesktop,
  fontSizeParagraphMobile,
  fontSizeTitleDesktopBig,
  fontSizeTitleMobilie,
} from "../../constants/fontSize";
import PageContext from "../../contexts/PageContext";
import Image from "../Image";
import Paragraph from "../Paragraph";
import Title from "../Title";
import styles from "./style.module.scss";

export default function FirstContentPage({
  content = "",
  title_line_1 = "",
  title_line_2 = "",
  image = "",
}) {
  const { isMobile } = useContext(PageContext);

  return (
    <div className={styles.welcomePage}>
      <div className={styles.welcomePageContent}>
        <div className={styles.welcomePageInformation}>
          <Title
            size={isMobile ? fontSizeTitleMobilie : fontSizeTitleDesktopBig}
          >
            {title_line_1} <br /> {title_line_2}
          </Title>
          <Paragraph
            content={content}
            size={isMobile ? fontSizeParagraphMobile : fontSizeParagraphDesktop}
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
          // name={isMobile ? "front_page_mobile" : "front_page_desktop"}
          name={image}
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
    </div>
  );
}
