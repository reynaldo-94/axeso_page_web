import Paragraph from '../components/Paragraph'
import Title from '../components/Title'
import styles from '../styles/pages/Blog.module.scss'

export default function Blog() {
  return (
    <div className={styles.blog}>
      <Title 
        text='Muy pronto...' 
        size={37} 
      />
      <Paragraph 
        content='Un lugar para compartir conocimiento, experiencia y buenas prácticas' 
      />
    </div>
  )
}