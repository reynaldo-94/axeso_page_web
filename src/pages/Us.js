import { FaArrowDown } from "react-icons/fa";
import FirstContentPage from "../components/FirstContentPage";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import { blackColor, whiteColor } from "../constants/color";
import { fontSizeTitleDesktopBig } from "../constants/fontSize";
import styles from "../styles/pages/Us.module.scss";

const widthImgMember = 150;
const heightImgMember = 160;

const { content, title_line_1, title_line_2, image } = {
  content:
    "Axeso siempre es tá evolucionando. Estamos construyendo un equipo de personas diversas, motivadas y altamente productivas. Nuestra esencia se basa en nuestros valores...",
  title_line_1: "Un trabajo en",
  title_line_2: "constante mejora.",
  image: "us",
};

export default function Us() {
  return (
    <>
      <FirstContentPage
        title_line_1={title_line_1}
        title_line_2={title_line_2}
        content={content}
        image={image}
      />
      {/* <div className={styles.us}>
        <div className={styles.usContent}>
          <div className={styles.usInformation}>
            <Title text="" size={fontSizeTitleDesktopBig}>
              Un trabajo en <br />
              constante mejora.
            </Title>
            <Paragraph
              content={
                "Axeso siempre es tá evolucionando. Estamos construyendo un equipo de personas diversas, motivadas y altamente productivas. Nuestra esencia se basa en nuestros valores..."
              }
            />
          </div>
          <FaArrowDown size={30} className={"arrow-down-border"} />
        </div>
        <div>
          <Image name="us" width={450} height={440} />
        </div>
      </div> */}
      <div
        className={styles.values}
        style={{
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div className={styles.valuesCard}>
          <div className={styles.valuesInformation}>
            <Title text="Seamos Empáticos" color={whiteColor} />
            <Paragraph content="Nos preocupamos sinceramente por los demas. Nos imaginamos en los zapatos de clientes, usuarios y entre nosotros mismos." />
          </div>
          <div className={styles.valuesImage}>
            <Image name="emphatic" width={350} height={200} />
          </div>
        </div>
        <div className={styles.valuesCard}>
          <div className={styles.valuesInformation}>
            <Title text="Seamos Productivos" color={whiteColor} />
            <Paragraph content="Nos preocupamos por aprovechar al maximo nuestro tiempo, cada reunión debe tener una agenda y concluir con una decisión tomada." />
          </div>
          <div className={styles.valuesImage}>
            <Image name="productive" width={250} height={150} />
          </div>
        </div>
      </div>
      <div
        className={styles.values}
        style={{
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div className={styles.valuesCard}>
          <div className={styles.valuesInformation}>
            <Title text="Seamos Concientes" color={whiteColor} />
            <Paragraph content="Nos preocupamos por impactar positivamente en el mundo, nuestro trabajo buscará siempre agregar valor en las personas." />
          </div>
          <div className={styles.valuesImage}>
            <Image name="aware" width={250} height={200} />
          </div>
        </div>
      </div>
      <div className={styles.team}>
        <Title
          text="Conoce al equipo"
          color={blackColor}
          size={33}
          align="left"
        />
        <div className={styles.teamMembers}>
          <div className={styles.member}>
            <Image
              name="luis_leon"
              height={heightImgMember}
              width={widthImgMember}
              extension="jpg"
            />
            <div className={styles.memberName}>Luis León</div>
            <div className={styles.memberPosition}>CEO</div>
          </div>
          <div className={styles.member}>
            <Image
              name="jorge_almeyda"
              height={heightImgMember}
              width={widthImgMember}
              extension="jpg"
            />
            <div className={styles.memberName}>Jorge Almeyda Vidal</div>
            <div className={styles.memberPosition}>DBA</div>
          </div>
          <div className={styles.member}>
            <Image
              name="daniel_oquelis"
              height={heightImgMember}
              width={widthImgMember}
              extension="jpg"
            />
            <div className={styles.memberName}>Daniel Oquelis</div>
            <div className={styles.memberPosition}>Developers Lead</div>
          </div>
          <div className={styles.member}>
            <Image
              name="alexis_vidal"
              height={heightImgMember}
              width={widthImgMember}
              extension="jpg"
            />
            <div className={styles.memberName}>Alexis Vidal</div>
            <div className={styles.memberPosition}>Full Stack</div>
          </div>
          <div className={styles.member}>
            <Image
              name="wilmer_morales"
              height={heightImgMember}
              width={widthImgMember}
              extension="jpg"
            />
            <div className={styles.memberName}>Wilmer Morales</div>
            <div className={styles.memberPosition}>Front-end Developer</div>
          </div>
          <div className={styles.member}>
            <Image
              name="tomas_oquelis"
              height={heightImgMember}
              width={widthImgMember}
              extension="jpg"
            />
            <div className={styles.memberName}>Tomas Oquelis</div>
            <div className={styles.memberPosition}>Product Desing Intern</div>
          </div>
          <div className={styles.member}>
            <Image
              name="reynaldo_cauche"
              height={heightImgMember}
              width={widthImgMember}
              extension="jpg"
            />
            <div className={styles.memberName}>Reynaldo Cauche</div>
            <div className={styles.memberPosition}>Developer</div>
          </div>
        </div>
      </div>
    </>
  );
}
