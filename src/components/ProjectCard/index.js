import { whiteColor } from "../../constants/color";
import Image from "../Image";
import Paragraph from "../Paragraph";
import Title from "../Title";
import styles from "./style.module.scss";
export default function ProjectCard({ data }) {

  const { card_1, card_2, card_3  } = data

  return (
    <>
      <div className={styles.card1}>
        <div className={styles.card1Image}>
          <Image name={card_1.image} width={500} height={450} />
        </div>
        <div className={styles.card1Body}>
          <Title text={card_1.title} size={33} />
          <Paragraph content={card_1.content} />
        </div>
      </div>
      <div className={styles.card2}>
        <Title text={card_2.title} size={33} color={whiteColor} />
        <div className={styles.card2Body}>
          <Paragraph content={card_2.content} />
          <div className={styles.card2Features}>
            <div className={styles.card2FeaturesTeam}>
              <div className={styles.labelRed}>Equipo</div>
              {
                card_2.team.map( (el, index) => {
                  return (
                    <div key={index}>{el}</div>
                  )
                })
              }
            </div>
            <div className={styles.card2FeaturesDuration}>
              <div className={styles.labelRed}>Duración</div>
              <div>{card_2.duration}</div>
            </div>
            <div className={styles.card2FeaturesDeliverables}>
              <div className={styles.labelRed}>Entregables</div>
              {
                card_2.deliverables.map((el, index) => {
                  return (
                    <div key={index}>{el}</div>
                  )
                })
              }
            </div>
          </div>
          <div className={styles.card2Process}>
            <div className={styles.labelRed}>Proceso</div>
            <div>{card_2.process}</div>
          </div>
        </div>
      </div>
      <div 
        className={styles.card3}
        style={{
          width: '100%',
          background: `url(/images/${card_3.image}.svg) no-repeat center`,
          // backgroundSize: 'cover' 
        }}
      >
        {/* <Image name={card_3.image} width={1440} /> */}
      </div>
    </>
  );
}
