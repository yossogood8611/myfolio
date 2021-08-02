import React, {Component} from 'react';
import "../login/login.css";
import kakao_icon from '../../image/login_kakao_icon.svg';
import facebook_icon from '../../image/login_facebook_icon.svg';
import google_icon from '../../image/login_google_icon.svg';
import naver_icon from '../../image/login_naver_icon.svg';
import {withRouter, Link} from "react-router-dom";

class Join extends Component {
    constructor(props){
        super(props);
        this.state={
            name : undefined,
            email: undefined,
            password : undefined,
            password_ : undefined,
        }
    }

    isEmail(asValue) {
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
        this.setState({password: e.target.value})
    }
    handleChangePwd_ = (e) => {
        this.setState({password_: e.target.value})
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
                            <div className="login_email_text">이름</div>
                            <input className="login_email_form" placeholder="이름을 입력해주세요" onChange={this.handleChangeName}/>
                            <div className="login_email_text">이메일 (아이디)</div>
                            <input className="login_email_form" placeholder="이메일 주소를 입력해주세요" onChange={this.handleChangeEmail}/>
                            <div className="login_email_text">비밀번호</div>
                            <input className="login_email_form" placeholder="비밀번호를 입력해주세요" onChange={this.handleChangePwd}/>
                            <div className="login_email_text">비밀번호 확인</div>
                            <input className="login_email_form" placeholder="비밀번호를 다시 한 번 입력해주세요" onChange={this.handleChangePwd_}/>
                            <Link to={`/join_done`}>
                                <div className="login_next_btn_able">다음으로</div>
                            </Link>
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