import React, {Component} from 'react';
import "../login/login.css";
import kakao_icon from '../../image/login_kakao_icon.svg';
import facebook_icon from '../../image/login_facebook_icon.svg';
import google_icon from '../../image/login_google_icon.svg';
import naver_icon from '../../image/login_naver_icon.svg';
import {withRouter, Link} from "react-router-dom";
import axios from "axios";
import {setCookie} from "../../cookies";

class Join extends Component {
    constructor(props){
        super(props);
        this.state={
            name : undefined,
            email: undefined,
            pwd : undefined,
            pwd_ : undefined,
            userType : undefined,
            checkEmail: undefined,
            token : undefined,
            userSeq : undefined,
        }
    }

    join = () => {
        let {name, email, pwd, pwd_,  userType} = this.state;
        if(this.checkedEmail(email)===false){
            alert("형식에 맞는 이메일을 입력하여 주세요")
        }else if(pwd!==pwd_){
            alert("비밀번호가 일치하지 않습니다.")
        }else if(!name || !pwd || !pwd_ || !userType || !email){
            alert("필수 항목을 작성해주세요")
        }
        let result = axios({
            method : 'POST',
            url : "localhost:8080/user/signup",
            headers: {
                "Content-Type" : `application/json`,
            },
            data: {
                name : this.state.name,
                email : this.state.email,
                pwd : this.state.password,
                userType : this.state.userType
            }

        }).then((result)=>{
            if(result.status < 400){
                alert("회원가입이 성공적으로 완료되었습니다.");
                const response = axios({
                    method : 'POST',
                    url : "localhost:8080/user/login",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    data : {
                        email : email,
                        pwd : pwd
                    }
                }).then((response)=>{
                    if(response.status<400){
                        const {history} = this.props;
                        this.state.token = result.data.accessToken;
                        this.state.userSeq = result.data.userSeq;
                        setCookie("userSeq", this.state.userSeq);
                        setCookie("accessToken", this.state.token);
                        history.push('/join_done');
                    }
                });
            }else {
                alert('회원가입 실패');
            }
        })
    }

    checkedEmail(asValue) {
        let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
    }

    handleChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    handleChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    handleChangePwd = (e) => {
        this.setState({pwd: e.target.value})
    }
    handleChangePwd_ = (e) => {
        this.setState({pwd_: e.target.value})
    }
    handleChangeUserType = (e) => {
        this.setState({userType : "0"})
    }
    handleChangeUserType_ = (e) => {
        this.setState({userType : "1"})
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
                            <div className="login_text">회원가입</div>
                            <div className="login_email_text">이름</div>
                            <input className="login_email_form" placeholder="이름을 입력해주세요" onChange={this.handleChangeName}/>
                            <div className="login_email_text">이메일 (아이디)</div>
                            <input className="login_email_form" placeholder="이메일 주소를 입력해주세요" onChange={this.handleChangeEmail}/>
                            <div className="login_email_text">비밀번호</div>
                            <input type="password" className="login_email_form" placeholder="비밀번호를 입력해주세요" onChange={this.handleChangePwd}/>
                            <div className="login_email_text">비밀번호 확인</div>
                            <input type="password" className="login_email_form" placeholder="비밀번호를 다시 한 번 입력해주세요" onChange={this.handleChangePwd_}/>

                            <div className="login_email_text">유저 타입</div>
                            <form className="join_userType">
                                <label for="0">개발자</label>
                                <input type="radio" value="개발자" id="0" className="join_userType_" onClick={this.handleChangeUserType}/>
                                <label htmlFor="1">디자이너</label>
                                <input type="radio" value="디자이너" id="1" onClick={this.handleChangeUserType_}/>
                            </form>
                            <div className="login_next_btn_able" onClick={this.join}>다음으로</div>
                            <div className="login_social">SNS 계정으로 로그인하기</div>
                            <div className="login_social_icon_box">
                                <img className="login_social_icon" src={naver_icon}/>
                                <img className="login_social_icon" src={kakao_icon}/>
                                <img className="login_social_icon" src={facebook_icon}/>
                                <img className="login_social_icon" src={google_icon}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Join);