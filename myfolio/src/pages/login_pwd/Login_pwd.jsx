import React, {Component} from 'react';
import '../login/login.css';
import './login_pwd.css';
import {withRouter, Link} from "react-router-dom";

class Login_pwd extends Component {
    constructor(props){
        super(props);
        this.state={
            pwd: '',
            user_email : 'rooproop1111@naver.com',
        }
    }

    handleChangePwd = (e) => {
        this.setState({pwd: e.target.value})
    }

    onKeyPress=(e)=>{
        if(e.key==='Enter'){
            this.login();
        }
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
                            <div className="user_box">
                                <div className="user_img"></div>
                                <div className="user_content">
                                    <div className="user_text">사용자</div>
                                    <div className="user_email">{this.state.user_email}</div>
                                </div>
                            </div>
                            <label className="login_email_text">비밀번호</label>
                            <input type="password" className="login_email_form" placeholder="비밀번호를 입력해주세요" onChange={this.handleChangePwd}/>
                            {this.state.pwd!==''?(
                                <Link to={`/`}><div className="login_next_btn_able">로그인</div></Link>
                            ) : (
                                <div className="login_next_btn">로그인</div>
                            )}
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

export default withRouter(Login_pwd);