import ProjectCard from "../../components/ProjectCard";

const data = {
  card_1: {
    image: 'web_providers',
    title: 'Una plataforma para  proveedores.',
    content: 'Uno de los distribuidores más grandes del Perú, implementó una plataforma que brinda información estratégica y optimiza la gestión de los proveedores.'
  },
  card_2: {
    title: 'Resumen del proyecto',
    content: 'Nuestro cliente, ,una compañia lider en la distribución de productos de consumo y salud y decide innovar con una herramienta pensada para sus proveedores, que busca ayudarlos en optimizar su gestión y mejorar las relaciones como socios estratégicos.',
    team: ['1 Project Manager', '1 Product design', '2 Developers', '1 DBA'],
    duration: '4 meses',
    deliverables: ['Aplicación Web', 'Código Fuente'],
    process: 'Análisis del problema, entrevista de usuarios, prototipado, desarrollo, QA'
  },
  card_3: {
    image: 'web_providers_big'
  }
}

export default function WebProviders() {
  return (
    <ProjectCard data={data} />
  )
}