import styles from './style.module.scss'

export default function Select({
  options = [],
  label = "",
}) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <select>
        {options.map(({ id, label }) => {
          return (
            <option key={id} value={id}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
