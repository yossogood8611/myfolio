import React, {Component} from 'react';
import "../login/login.css";
import "./join.css";
import {withRouter, Link} from "react-router-dom";
import JoinImg from '../../image/Join_img.svg';

class JoinDone extends Component {
    render() {
        return (
            <div>
                <div className="login">
                    <div className="content_left">
                        <div className="left_small_logo">MyFolio</div>
                    </div>
                    <div className="content_right">
                        <div className="right_box">
                            <div className="join_done_msg1">환영합니다!</div>
                            <div className="join_done_msg2">마이폴리오의 회원이 되신 것을 환영합니다.</div>
                            <div className="join_done_msg3">마이폴리오의 여러가지 템플릿을 사용하여<br/>나만의 포트폴리오를 만들어 보세요!</div>
                            <img className="join_done_img" src={JoinImg}/>
                            <Link to={`/`}><div className="login_next_btn_able">시작하기</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(JoinDone);