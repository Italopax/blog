import React from "react";
import styles from "./Header.module.css";

const Header = ({setModal}) => {

  return(
    <header className={styles.header}>
      <div className="maxSize">
        <h1 className="title">E-Blog</h1>
        <button onClick={() => setModal(true)}>Adicioar Post</button>
      </div>
    </header>
  )
}

export default Header;