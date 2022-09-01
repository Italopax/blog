import React from "react";
import "./App.css";
import Header from "./components/parts/Header";
import Footer from "./components/parts/Footer";
import Main from "./components/parts/Main";
import { UserStorage } from "./UserContext";

function App() {

  return (
    <div className="app">
      <UserStorage>
        <Header />
        <Main />
        <Footer />
      </UserStorage>
    </div>
  );
}

export default App;