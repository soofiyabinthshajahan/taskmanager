import React from "react";
import './Login/Loginform'
import './Login/createAccount'
import './Login/forgotAccount'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginForm from "./Login/Loginform";
import CreateAccount from "./Login/createAccount";
import ForgotAccount from "./Login/forgotAccount";
function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
      <Route path ="/" element={<LoginForm/>}></Route>
      <Route path ="forgot-password" element ={<ForgotAccount/>}/>
      <Route path ="create-account" element={<CreateAccount/>}/>
      


     </Routes>


    </div>
    </Router>
  );
}

export default App;
