import { redColor, whiteColor } from '../../constants/color'
import Arrow from '../Arrow'
import styles from './style.module.scss'

export default function Button ({ 
  text = '',
  arrow = false,
  colorText = whiteColor,
  backgroundColor = redColor,
  borderRadius = 0,
  type='button',
  disabled = false
}) {
  return (
    <button
      style={{
        backgroundColor,
        color: colorText,
        borderRadius: `${borderRadius}px`
      }}
      className={styles.button}
      type={type}
      disabled={disabled}
    >      
      <div className={styles.text}>{text}</div>
      {arrow ? (
        <Arrow typeColor='white' />
      ) : null}
    </button>
  )
}