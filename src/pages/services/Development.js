import ServiceCard from "../../components/ServiceCard"

export default function Development() {
  const data = {
    title: 'Desarrollo',
    content: "Desarrollamos productos digitales basados ​​en las mejores prácticas de desarrollo de software. Codificamos en Javascript y usamos Next.JS, Node.JS y React Native. Trabajamos en rendimiento, accesibilidad, usamos el marco de trabajo SCRUM en todos nuestros desarrollos.",
    process: ['Análisis', 'Investigación', 'Backlog', 'Diseño', 'Desarrollo'],
    image: 'development'
  }
  return (
    <ServiceCard data={data} />
  )
}