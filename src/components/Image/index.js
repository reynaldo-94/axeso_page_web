/* eslint-disable jsx-a11y/alt-text */
export default function Image ({ name='', width=300, height=300, extension='svg' }) {
  return (
    <img src={`/images/${name}.${extension}`} width={`${width}px`} height={`${height}px`} />
  )
}