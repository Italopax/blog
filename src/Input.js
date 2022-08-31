import React from "react";
import styles from "./Input.module.css";

const Input = ({label, type, name, textarea, error, value, setValue}) => {


  return(
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      {textarea ? (
          <textarea id={name} type={type} className={styles.textarea} rows="10" value={value} onChange={({target}) => setValue(target.value)} />
        ) : (
          <input id={name} type={type} className={styles.input} value={value} onChange={({target}) => setValue(target.value)} />
        )
      }
      {error && value === '' ? <p className={styles.error}>Preencha esse campo</p> : null}
    </div>
  )
}

export default Input;