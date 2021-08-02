import React, {Component} from "react";
import {Route, withRouter} from 'react-router-dom';
import MainPage from "./pages/main/mainPage";
import LoginPage from "./pages/login/Login";
import JoinPage from "./pages/join/Join";
import JoinDonePage from "./pages/Join_done/JoinDone";

function App() {
  return (
    <div className="App">
        <Route path='/' component={MainPage} exact/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/join' component={JoinPage}/>
        <Route path='/join_done' component={JoinDonePage}/>
    </div>
  );
}

export default App;
