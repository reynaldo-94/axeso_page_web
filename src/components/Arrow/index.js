import { lightGreenColor } from "../../constants/color";
import { fontPrimary } from "../../constants/fonts";
import styles from "./style.module.scss";

export default function Arrow({
  typeColor = "blue",
  label = "",
  font = fontPrimary,
  underline = false,
  onClick= () => {}
}) {
  return (
    <div className={styles.container}>
      <div
        style={{
          fontFamily: `${font}, sans-serif`,
          borderBottom: underline ? `3px solid ${lightGreenColor}` : "none",
          cursor: 'pointer'
        }}
        onClick={onClick}
        className={styles.label}
      >
        {label}
      </div>
      <span
        className={`${styles.arrow} ${styles.arrowBar} ${styles.isRight} ${styles[typeColor]}`}
      ></span>
    </div>
  );
}
