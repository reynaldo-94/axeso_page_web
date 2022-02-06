import ServiceCard from "../../components/ServiceCard"

export default function Strategy() {
  const data = {
    title: 'Estrategia',
    content: "Realizamos procesos de descubrimiento inmersivo para entender las necesidades de tu negocio y clientes, luego te ayudamos crear un mvp priorizando funcionalidades con el objetivo de incrementar tu ROI.",
    process: ['Descubrimiento', 'Ideación', 'Prototipado', 'MVP'],
    image: 'strategy'
  }
  return (
    <ServiceCard data={data} />
  )
}