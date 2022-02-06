import ServiceCard from "../../components/ServiceCard"

export default function Design() {
  const data = {
    title: 'Diseño',
    content: "Diseñamos productos digitales buscando la mejor experiencia de usuario e interfaces de usuario atractivas. Con prototipos testeamos e iteramos el producto para encontrar las funcionalidades principales y la arquitectura UX.",
    process: ['Análisis', 'Ideación', 'Prototipado', 'Conclusiones'],
    image: 'design'
  }
  return (
    <ServiceCard data={data} />
  )
}