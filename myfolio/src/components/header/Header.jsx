import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import './header.css';
import header_profile from '../../image/header_profile.svg';
import {getCookie} from "../../cookies";

class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="contents">
                        <div className="logo">MyFolio</div>
                        <div className="menu">
                        </div>
                        {getCookie("accessToken")?(
                            <div>
                                <div className="buttons">
                                    <Link to={`/myfolio_write`}>
                                        <div className="upload_button">업로드</div>
                                    </Link>
                                    <Link to={`/mypage`}>
                                        <div className="myPortfolio_button">마이 포트폴리오</div>
                                    </Link>
                                </div>
                                <img className="profile" src={header_profile}/>
                            </div>
                        ):(
                            <div>
                                <div className="buttons">
                                    <Link to={`/login`}>
                                        <div className="upload_button">로그인</div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);