import React from "react";

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {

  console.log('dwad')

  const [modal, setModal] = React.useState(false);
  const [posts, setPosts] = React.useState(
    localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : []
  );

  return(
    <UserContext.Provider value={{modal, setModal, posts, setPosts}}>
      {children}
    </UserContext.Provider>
  )
}