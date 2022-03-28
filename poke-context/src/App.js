import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import "../src/App.css";
import { UserContext } from "./Context/Context";


function App () {

  let [isLogged, setLogged] = useState(false);

  function setAuth () {
    setLogged()
  }

  return (
  <>
    <UserContext.Provider value={{
      isLogged,
      setAuth,
    }}>
      <nav>
          <NavLink to="/" > Home </NavLink>
          <NavLink to="/Login" > Login </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} > Home </Route>
        <Route path="/Login" element={<Login/>} > Login </Route>
      </Routes>
    </UserContext.Provider>
  </>
  )
}

export default App;