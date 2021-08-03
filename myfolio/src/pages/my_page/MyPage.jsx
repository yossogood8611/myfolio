import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import '../my_page/my_page.css';
import Header from '../../components/header/Header';
import ModifyIcon from '../../image/mypage_modify.svg';
import NewFolio from '../../image/portfolio_new.svg';

class MyPage extends Component {
    constructor(props){
        super(props);
        this.state={
            email : 'rooproop111@naver.com',
            name : 'Yujin Lee',
            text : 'Web Front Developer / South Korea'
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="mypage">
                    <div className="mypage_header">
                        <div className="profile">
                            <div className="profile_img"></div>
                            <div className="profile_contents">
                                <div className="profile_email">{this.state.email}</div>
                                <div className="profile_name">{this.state.name}</div>
                                <div className="profile_text">{this.state.text}</div>
                            </div>
                            <img className="profile_modify" src={ModifyIcon}/>
                        </div>
                    </div>
                    <div className="mypage_content">
                        <div className="mypage_portfolios">
                            <div className="portfolio">
                                <img className="portfolio_img" src={NewFolio}/>
                                <div className="portfolio_name">새로운 포트폴리오</div>
                            </div>
                            <div className="portfolio">
                                <div className="portfolio_img"></div>
                                <div className="portfolio_name">내 포트폴리오</div>
                                <div className="portfolio_make">2021.04.28</div>
                            </div>
                            <div className="portfolio">
                                <div className="portfolio_img"></div>
                                <div className="portfolio_name">내 포트폴리오</div>
                                <div className="portfolio_make">2021.04.28</div>
                            </div>
                            <div className="portfolio">
                                <div className="portfolio_img"></div>
                                <div className="portfolio_name">내 포트폴리오</div>
                                <div className="portfolio_make">2021.04.28</div>
                            </div>
                            <div className="portfolio">
                                <div className="portfolio_img"></div>
                                <div className="portfolio_name">내 포트폴리오</div>
                                <div className="portfolio_make">2021.04.28</div>
                            </div>
                            <div className="portfolio">
                                <div className="portfolio_img"></div>
                                <div className="portfolio_name">내 포트폴리오</div>
                                <div className="portfolio_make">2021.04.28</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MyPage);