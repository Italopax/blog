import React from "react";
import styles from "./Header.module.css";
import { UserContext } from "../../UserContext";

const Header = () => {

  const {setModal} = React.useContext(UserContext);

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