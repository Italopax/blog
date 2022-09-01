import React from "react";
import Input from "./Input";
import styles from "./ModalCreatePost.module.css";
import { UserContext } from "../UserContext";

const ModalCreatePost = () => {

  const {setModal, posts, setPosts} = React.useContext(UserContext);

  const [titulo, setTitulo] = React.useState('');
  const [conteudo, setConteudo] = React.useState('');
  const [error, setError] = React.useState(false);

  function handleOutsideClick (e) {
    if(e.target === e.currentTarget) setModal(false);
  }

  function handleClick () {
    setError(false);
    if(conteudo === '' || titulo === ''){
      setError(true);
    } else {
      setPosts([...posts, {title: titulo, content: conteudo, id: Math.random()}]);
      setModal(false);
    }
  }

  return(
    <section className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.modalBox}>
        <Input label="Título" type="text" name="titulo" value={titulo} setValue={setTitulo} error={error} />
        <Input label="Conteúdo" type="text" name="conteudo" textarea={true} value={conteudo} setValue={setConteudo} error={error} />
        <button onClick={handleClick}>Postar</button>
      </div>
    </section>
  )
}

export default ModalCreatePost;