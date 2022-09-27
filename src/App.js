import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { UserStorage } from "./UserContext";
import Header from "./components/parts/Header";
import Footer from "./components/parts/Footer";
import Login from "./components/pages/Login";
import Feed from "./components/parts/Feed";

function App() {

  return (
    <div className="app">
      {/* <UserStorage>
        <Header />
        <Main />
        <Footer />
      </UserStorage> */}
      <UserStorage>
        <BrowserRouter>
          <Header />  
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserStorage>
    </div>
  );
}

export default App;