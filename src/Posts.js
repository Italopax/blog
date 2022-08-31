import React from "react";
import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = ({posts, setPosts}) => {
  posts.map((post)=>{
    console.log(post.id)
  })

  return(
    <section className={styles.posts}>
      {posts.map((post) => <Post title={post.title} content={post.content} id={post.id} posts={posts} setPosts={setPosts} />
      )}
    </section>
  )
}

export default Posts;