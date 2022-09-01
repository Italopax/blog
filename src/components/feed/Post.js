import React from "react";
import styles from "./Post.module.css";
import { UserContext } from "../../UserContext";

const Post = ({title, content, id}) => {

  const {posts, setPosts} = React.useContext(UserContext);

  function deletePost () {
    posts.map((post)=>{
      if(post.id === id){
        setPosts(posts.filter((item) => item.id !== id))
      }
    })
  }

  return(
    <div className={styles.post}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
      <button onClick={deletePost}>Apagar post</button>
    </div>
  )
}

export default Post;