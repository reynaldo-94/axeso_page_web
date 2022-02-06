import ProjectCard from "../../components/ProjectCard";

const data = {
  card_1: {
    image: 'vendors_app',
    title: 'Rediseño y desarrollo de app de vendedores',
    content: 'App vendors es una aplicación móvil que ayuda a las fuerza de ventas en todas sus actividades con sus clientes.'
  },
  card_2: {
    title: 'Resumen del proyecto',
    content: 'Dimexa rediseña la principal herramienta de su fuerza de ventas, buscando mejorar la experiencia y simplificar su proceso en las actividades con sus clientes.',
    team: ['1 Project Manager', '1 Product design', '2 Developers', '1 DBA'],
    duration: '8 meses',
    deliverables: ['Arquitectura UX', 'App móvil', 'Código Fuente'],
    process: 'Análisis del problema, entrevista de usuarios, prototipado, desarrollo, QA'
  },
  card_3: {
    image: 'vendors_app_big'
  }
}

export default function VendorsApp() {
  return (
    <ProjectCard data={data} />
  )
}