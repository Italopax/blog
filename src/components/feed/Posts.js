import React from "react";
import Post from "./Post";
import styles from "./Posts.module.css";
import { UserContext } from "../../UserContext";

const Posts = () => {

  const {posts} = React.useContext(UserContext);

  return(
    <section className={styles.posts}>
      {posts.map((post) => <Post title={post.title} content={post.content} id={post.id} /* posts={posts} setPosts={setPosts} */ />
      )}
    </section>
  )
}

export default Posts;