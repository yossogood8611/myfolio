import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import '../my_page/my_page.css';
import Header from '../../components/header/Header';
import ModifyIcon from '../../image/mypage_modify.svg';
import NewFolio from '../../image/portfolio_new.svg';
import {getCookie} from "../../cookies";
import axios from "axios";
import img from '../../image/img.png';
import img1 from '../../image/img_1.png';

class MyPage extends Component {
    constructor(props){
        super(props);
        this.state={
            email : 'rooproop@naver.com',
            name : '이유진',
            text : ' ',
            portfolio : [{}]
        }
    }

    getUser = async function () {
        let userSeq = getCookie('userSeq');
        let result = await axios({
            method : 'GET',
            url : `http://13.124.125.78:8080/user/${userSeq}`,
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
            url : `http://13.124.125.78:8080/portfolio/${userSeq}`,
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
        console.log(this.state.email, this.state.name);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="mypage">
                    <div className="mypage_header">
                        <div className="profile1">
                            <div className="profile_img"></div>
                            <div className="profile_contents">
                                <div className="profile_email">rooproop1111@naver.com</div>
                                <div className="profile_name">이유진</div>
                            </div>
                        </div>
                    </div>
                    <div className="mypage_content">
                        <div className="mypage_portfolios">
                            <div className="portfolio">
                                <img className="portfolio_img" src={NewFolio}/>
                                <div className="portfolio_name">새로운 포트폴리오</div>
                            </div>
                            <div className="portfolio">
                                <Link to={`/myfolio`}>
                                    <img className="portfolio_img" src={img}/>
                                    <div className="portfolio_name">개발자 포트폴리오</div>
                                    <div className="portfolio_make">2021.08.03</div>
                                </Link>
                            </div>
                            <div className="portfolio">
                                <Link to={`/myfolio2`}>
                                    <img className="portfolio_img" src={img1}/>
                                    <div className="portfolio_name">디자이너 포트폴리오</div>
                                    <div className="portfolio_make">2021.08.07</div>
                                </Link>
                            </div>
                                </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MyPage);