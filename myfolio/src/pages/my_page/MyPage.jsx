import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import '../my_page/my_page.css';
import Header from '../../components/header/Header';
import ModifyIcon from '../../image/mypage_modify.svg';
import NewFolio from '../../image/portfolio_new.svg';
import {getCookie} from "../../cookies";
import axios from "axios";

class MyPage extends Component {
    constructor(props){
        super(props);
        this.state={
            email : 'undefined',
            name : 'undefined',
            text : '추후 추가',
            portfolio : [{}]
        }
    }

    getUser = async function () {
        let userSeq = getCookie('userSeq');
        let result = await axios({
            method : 'GET',
            url : `http://localhost:8080/user/${userSeq}`,
            headers : {
                "Content-Type": 'application/json',
                'x-access-token' : getCookie('accessToken')
            }
        });
        this.setState({
            email: result.data.email,
            name : result.data.name
        })
    }

    getPortfolio = async function() {
        let userSeq = getCookie("userSeq");
        let result = await axios ({
            method : 'GET',
            url : `http://localhost:8080/portfolio/${userSeq}`,
            headers : {
                "Content-Type": 'application/json',
                'x-access-token' : getCookie('accessToken')
            }
        });
        this.setState({
            portfolio : result.data
        })
    }

    componentDidMount() {
        this.getUser();
        this.getPortfolio();
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
                            {this.state.portfolio.map(arr=>(
                                <div className="portfolio" key={arr.seq}>
                                    <img className="portfolio_img" src={arr.projectImage}/>
                                    <div className="portfolio_name">{arr.projectName}</div>
                                    <div className="portfolio_make">{arr.regdate}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MyPage);