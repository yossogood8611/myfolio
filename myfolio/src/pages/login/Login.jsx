import React, {Component} from 'react';
import "./login.css";
import kakao_icon from '../../image/login_kakao_icon.svg';
import facebook_icon from '../../image/login_facebook_icon.svg';
import google_icon from '../../image/login_google_icon.svg';
import naver_icon from '../../image/login_naver_icon.svg';
import {withRouter, Link} from "react-router-dom";
import {getCookie,setCookie} from "../../cookies";
import axios from "axios";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email: undefined,
            pwd : undefined,
        }
    }

    login = () => {
        const {email, pwd} = this.state;
        const result = axios({
            method : 'POST',
            url : "http://13.124.125.78:8080/user/login",
            headers:{
                "Content-Type" : "application/json"
            },
            data : {
                email : email,
                pwd : pwd
            }
        }).then((result=>{
            if(result.data.status!==400){
                alert('아이디와 비밀번호를 다시 확인해주세요');
                document.getElementById("email").value='';
                document.getElementById("pwd").value='';
        }else{
                const {history} = this.props;
                this.state.token = result.data.accessToken;
                this.state.userSeq = result.data.userSeq;
                setCookie("userSeq", this.state.userSeq);
                setCookie("accessToken", this.state.token);
                history.push('/');
            }
            }
            ))

    }

    onKeyPress=(e)=>{
        if(e.key==='Enter'){
            this.login();
        }
    }

    isEmail(asValue) {
        let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
    }

    handleChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    handleChangePwd = (e) => {
        this.setState({pwd: e.target.value})
    }

    render() {
        return (
            <div>
                <div className="login">
                    <div className="content_left">
                        <div className="left_small_logo">MyFolio</div>
                    </div>
                    <div className="content_right">
                        <div className="right_box">
                            <div className="login_text">로그인</div>
                                <label className="login_email_text">이메일 주소</label>
                                <input className="login_email_form" id="email" placeholder="이메일 주소를 입력해주세요" onChange={this.handleChangeEmail}/>

                                <input type="password" className="login_email_form" id="pwd" placeholder="비밀번호를 입력해주세요" onChange={this.handleChangePwd} onKeyPress={this.onKeyPress}/>

                            {this.isEmail(this.state.email)?(
                                    <div className="login_next_btn_able" onClick={this.login}>로그인</div>
                            ) : (
                                <div className="login_next_btn">로그인</div>
                            )}
                            <div className="login_social">SNS 계정으로 로그인하기</div>
                            <div className="login_social_icon_box">
                                <img className="login_social_icon" src={naver_icon}/>
                                <img className="login_social_icon" src={kakao_icon}/>
                                <img className="login_social_icon" src={facebook_icon}/>
                                <img className="login_social_icon" src={google_icon}/>
                            </div>
                            <div className="login_to_join_box">
                                <div className="login_to_join_line"></div>
                                <div className="login_to_join_text">마이폴리오가 처음이신가요?</div>
                                <div className="login_to_join_line"></div>
                            </div>
                            <Link to={`/join`}>
                                <div className="login_join_btn">회원가입</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);