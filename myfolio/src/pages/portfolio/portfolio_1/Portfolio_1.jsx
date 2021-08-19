import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import Header from '../../../components/header/Header';
import img1 from '../../../image/portfolio_1-1.svg';
import img from '../../../image/img.png';
import './portfolio.css';

class Portfolio_1 extends Component {
    render() {
        return (
            <div>
                <div className="portfolio1">
                    <img src={img1} className="portfolio_banner1"/>
                    <div className="portfolio_part_1">
                        <div className="profile">
                            <div className="profile_text">About Me</div>
                            <div className="profile_box">
                                <div className="profile_1">
                                    <img className="profile_1_img"/>
                                    <div className="profile_1_name">Lee yujin</div>
                                    <div className="profile_1_birth">2000.02.25</div>
                                    <div className="profile_1_job">Front Developer</div>
                                </div>
                                <div className="profile_2">
                                    <div className="profile_my_box">
                                        <div className="profile_title">EDUCATION</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <div className="profile_content_left">2008.03.02</div>
                                                <div>냠냠 영어 어린이집</div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">2018.03.02</div>
                                                <div>창동고등학교</div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">2023.03.02</div>
                                                <div>서울과학기술대학교</div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="profile_my_box">
                                        <div className="profile_title">WORK</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <div className="profile_content_left">2020.05.07</div>
                                                <div>교내 근로</div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">2021.05.01</div>
                                                <div>해법 수학 학원</div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="profile_my_box">
                                        <div className="profile_title">AWORDS</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <div className="profile_content_left">2019.12.10</div>
                                                <div>한이음</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile_2">
                                    <div className="profile_my_box">
                                        <div className="profile_title">SKILLS</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <div className="profile_content_left">REACT</div>
                                                <div className="stack">
                                                    <div className="stack_on">75%</div>
                                                </div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">HTML & CSS</div>
                                                <div className="stack">
                                                    <div className="stack_on2">80%</div>
                                                </div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">GitHub</div>
                                                <div className="stack">
                                                    <div className="stack_on3">60%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="profile_my_box">
                                        <div className="profile_title">CONTACT</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <div className="profile_content_left">Phone</div>
                                                <div>010-5558-7174</div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">E-mail</div>
                                                <div>rooproop1111@naver.com</div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">Instargram</div>
                                                <div>@yu_jin_200</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hr">ㅤ</div>
                    <div className="portfolio_part_2">
                        <div className="project">
                            <div className="profile_text">Project</div>
                            <div className="project_box">
                                <img className="projectImg" src={img}/>
                                <div className="project_contents">
                                    <div className="project_title">MyFolio PROJECT</div>
                                    <div className="project_period">2021.00.01 ~ 2021.08.15</div>
                                    <div className="project_text">
                                        개발자, 디자이너에게 포트폴리오 템플릿을 제공하여, 손 쉽게 온라인 포트폴리오를 작성할 수 있게 한다.
                                         작성을 마치면 마이페이지에서 작성한 포트폴리오를 확인, 수정할 수 있다.
                                    </div>
                                    <div className="project_useT">사용 프로그램</div>
                                    <div className="project_useP">
                                        React, JavaScript, MySQL
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hr">ㅤ</div>
                    <div className="portfolio_part_3">
                        <div className="contact">
                            <div className="contactMe">Contact Me</div>
                            <div className="contact_array">
                                <div className="contact_box">
                                    <div className="profile_title">Contact</div>
                                    <div className="contact_small_box">
                                        <input className="input_name" type="text" placeholder="이름을 입력해주세요"/>
                                        <input className="input_email" type="text" placeholder="이메일을 입력해주세요"/>
                                    </div>
                                    <input className="input_title" type="text" placeholder="제목을 입력해주세요"/>
                                    <input className="input_content" type="text" placeholder="내용을 입력해주세요"/>
                                    <div className="submit_box">
                                        <div className="submit_btn">제출하기</div>
                                    </div>
                                </div>
                                <div className="contact_me">
                                    <div className="contact_title">Phone</div>
                                    <div className="contact_content">010-5558-7174</div>
                                    <div className="contact_title">E-Mail</div>
                                    <div className="contact_content">rooproop1111@naver.com</div>
                                    <div className="contact_title">Instargram</div>
                                    <div className="contact_content">@yu_jin_200</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_part_4">
                        <div className="portfolio_footer1">ⓒ 2021. Myfolio. all rights reserved.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Portfolio_1);