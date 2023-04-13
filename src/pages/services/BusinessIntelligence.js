import ServiceCard from "../../components/ServiceCard"

export default function BusinessIntelligence() {
  const data = {
    title: 'Business Intelligence',
    content: "Automatizamos tus reportes en power bi, optimizando el proceso de toma de decisiones. Impleméntanos una estructura escalable para tu compañía.",
    process: ['Descubrimiento', 'Ideación', 'Prototipado', 'MVP'],
    image: 'strategy'
  }
  return (
    <ServiceCard data={data} />
  )
}