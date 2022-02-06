import styles from './style.module.scss'

export default function Input({ placeholder = "", type = "text", label = "" }) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input placeholder={placeholder} type={type} />
    </div>
  );
}
