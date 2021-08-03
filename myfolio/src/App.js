import React, {Component} from "react";
import {Route, withRouter} from 'react-router-dom';
import MainPage from "./pages/main/mainPage";
import LoginPage from "./pages/login/Login";
import LoginPwdPage from "./pages/login_pwd/Login_pwd";
import JoinPage from "./pages/join/Join";
import JoinDonePage from "./pages/Join_done/JoinDone";
import MyPage from './pages/my_page/MyPage';

function App() {
  return (
    <div className="App">
        <Route path='/' component={MainPage} exact/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/login_pwd' component={LoginPwdPage}/>
        <Route path='/join' component={JoinPage}/>
        <Route path='/join_done' component={JoinDonePage}/>
        <Route path='/mypage' component={MyPage}/>
    </div>
  );
}

export default App;
