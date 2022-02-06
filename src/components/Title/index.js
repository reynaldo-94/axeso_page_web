import { darkBlueColor } from "../../constants/color";
import { fontSizeTitleDesktopMedium } from "../../constants/fontSize";
import styles from "./style.module.scss";

export default function Title({
  color = darkBlueColor,
  text = "",
  size = fontSizeTitleDesktopMedium,
  align = "left",
  children
}) {
  return (
    <div
      className={styles.title}
      style={{
        color,
        fontSize: `${size}px`,
        textAlign: align,
      }}
    >
      {text === "" ? (
        children
      ) : text }
    </div>
  );
}
