import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Posts from "./Posts";
import Modal from "./Modal";

function App() {

  const [modal, setModal] = React.useState(false);
  const [posts, setPosts] = React.useState(
    localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : []
  );

  React.useEffect(()=>{
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts])

  return (
    <div className="app">
      <Header modal={modal} setModal={setModal} />
      <main className="maxSize">
        <Posts posts={posts} setPosts={setPosts} />
        {modal ? <Modal setModal={setModal} posts={posts} setPosts={setPosts} /> : null}
      </main>
      <Footer />
    </div>
  );
}

export default App;