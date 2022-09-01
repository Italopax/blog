import React from "react";
import Posts from "../feed/Posts";
import ModalCreatePost from "../ModalCreatePost";
import { UserContext } from "../../UserContext";

function Main() {

  const {modal, posts} = React.useContext(UserContext);

  React.useEffect(()=>{
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts])

  return (
    <main className="maxSize">
      <Posts />
      {modal ? <ModalCreatePost /> : null}
    </main>
  );
}

export default Main;