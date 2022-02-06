import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import styles from "../styles/pages/Projects.module.scss";

const projectsList = [
  {
    image: "axeso_little",
    title: "AxesoApp",
    text: "Una aplicación móvil que ayuda a las personas a comparar precios de medicamentos.",
    detailPath: "axeso-app",
  },
  {
    image: "web_providers_little",
    title: "Web Proveedores",
    text: "Una plataforma que potencia la relación con proveedores",
    detailPath: "web-proveedores",
  },
  {
    image: "vendors_little",
    title: "Vendors app",
    text: "Una aplicación móvil que optimiza la gestión de la fuerza de ventas",
    detailPath: "vendors-app",
  },
  {
    image: "axeso_farma_little",
    title: "Axesofarma",
    text: "Market place de farmacias de barrio",
    detailPath: "axeso-farma",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className={styles.projects}>
      {projectsList.map((el, index) => (
        <div
          className={styles.projectsCard}
          key={index}
          onClick={() => navigate(`/proyectos/${el.detailPath}`)}
          title='Ver detalle del proyecto'
        >
          <div className={styles.cardImage}>
            <Image name={el.image} width={180} height={120} />
          </div>
          <div className={styles.cardBody}>
            <Title text={el.title} size={25} />
            <Paragraph content={el.text} />
          </div>
          <div className={styles.cardIcon}>
            <div>
              <FaArrowRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
