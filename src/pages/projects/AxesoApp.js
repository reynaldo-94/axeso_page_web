import ProjectCard from "../../components/ProjectCard";

const data = {
  card_1: {
    image: 'axeso_app',
    title: 'Una app que te ayuda a ahorrar en tus medicamentos',
    content: 'Aplicación móvil que ayuda a las personas a encontrar medicamentos, comparar precios y acceder a cupones digitales.'
  },
  card_2: {
    title: 'Resumen del proyecto',
    content: 'Axesoapp es un proyecto propio que lanzamos  en el 2019, con el objetivo de mejorar el acceso a los medicamentos, buscamos darle visibilidad a las farmacias independientes mostrando sus precios y promociones.',
    team: ['1 Project Manager', '1 Product design', '2 Developers'],
    duration: '5 meses',
    deliverables: ['Arquitectura UX', 'App móvil'],
    process: 'Análisis del problema, descubrimiento de mercado, prototipado, desarrollo'
  },
  card_3: {
    image: 'axeso_app_big'
  }
}

export default function AxesoApp() {
  return (
    <ProjectCard data={data} />
  )
}