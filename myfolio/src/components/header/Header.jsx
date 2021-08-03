import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import './header.css';
import header_profile from '../../image/header_profile.svg';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="contents">
                        <Link to={'/'}><div className="logo">MyFolio</div></Link>
                        <div className="menu">
                            <div>마이폴리오</div>
                            <div>마이폴리오</div>
                            <div>마이폴리오</div>
                            <div>마이폴리오</div>
                            <div>마이폴리오</div>
                        </div>
                        <div className="buttons">
                            <div className="upload_button">업로드</div>
                            <Link to={`/mypage`}>
                                <div className="myPortfolio_button">마이 포트폴리오</div>
                            </Link>
                        </div>
                        <img className="profile" src={header_profile}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);