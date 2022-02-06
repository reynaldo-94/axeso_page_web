import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button";
import Image from "../Image";
import Paragraph from "../Paragraph";
import Title from "../Title";
import styles from "./style.module.scss";

export default function ServiceCard({ data }) {
  const { title, content, process, image } = data;
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.information}>
          <Title text={title} size={33} />
          <Paragraph content={content} />
          <div className={styles.informationProcess}>
            <div className={styles.processLabel}>Proceso</div>
            <div className={styles.processOptions}>
              {process.map((el, key) => {
                return (
                  <>
                    <div>{el}</div>
                    { process.length - 1 !== key && <FaArrowRight /> }
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <Image name={image} width={200} height={200} />
        </div>
      </div>
      <div>
        <Link to="/contactanos">
          <Button text="Conversemos" arrow={true} borderRadius={8} />
        </Link>
      </div>
    </div>
  );
}
