import ProjectCard from "../../components/ProjectCard";

const data = {
  card_1: {
    image: 'axeso_farma',
    title: 'App movil que acerca a las farmacias con las familias.',
    content: 'Axesofarma es una marketplace de farmacias independientes, donde la primera farmacia que captura el pedido lo atiende'
  },
  card_2: {
    title: 'Resumen del proyecto',
    content: 'Axesofarma es un marketplace  que mejora las oportunidades del mercado, ofreciendo al usuario una oferta cercana segun su geolocalización',
    team: ['1 Project Manager', '1 Product design', '2 Developers'],
    duration: '6 meses',
    deliverables: ['Arquitectura UX', 'App móvil'],
    process: 'Descubrimiento del problema , ideación , prototipado, desarrollo mvp.'
  },
  card_3: {
    image: 'axeso_farma_big'
  }
}

export default function AxesoFarma() {
  return (
    <ProjectCard data={data} />
  )
}