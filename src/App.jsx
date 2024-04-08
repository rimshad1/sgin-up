import Dashboard from "./components/Dashboard";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginContext } from "./Contexts/LoginContext";
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <>
      <BrowserRouter>
        <LoginContext.Provider value={{ email, setEmail, pass, setPass }}>
          <Routes>
            <Route exact path="/dashboard" Component={Dashboard} />
            <Route exact path="/" Component={Login} />
          </Routes>
        </LoginContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
