import React, {Component} from "react";
import {Route, withRouter} from 'react-router-dom';
import MainPage from "./pages/main/mainPage";
import LoginPage from "./pages/login/Login";
import LoginPwdPage from "./pages/login_pwd/Login_pwd";
import JoinPage from "./pages/join/Join";
import JoinDonePage from "./pages/Join_done/JoinDone";
import MyPage from './pages/my_page/MyPage';
import Portfolio from './pages/portfolio/portfolio_1/Portfolio_1';
import PortfolioWritePage from './pages/portfolio_write/portfolio_write_1/portfolio_write_1';
import Portfolio2 from "./pages/portfolio/portfolio_2/portfolio_2";

function App() {
  return (
    <div className="App">
        <Route path='/' component={MainPage} exact/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/login_pwd' component={LoginPwdPage}/>
        <Route path='/join' component={JoinPage}/>
        <Route path='/join_done' component={JoinDonePage}/>
        <Route path='/mypage' component={MyPage}/>
        <Route path='/myfolio' component={Portfolio}/>
        <Route path='/myfolio_write' component={PortfolioWritePage}/>
        <Route path='/myfolio2' component={Portfolio2}/>
    </div>
  );
}

export default App;
