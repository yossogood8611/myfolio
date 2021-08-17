import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import Header from '../../../components/header/Header';
import img1 from '../../../image/portfolio_1-1.svg';
import '../../portfolio/portfolio_1/portfolio.css';

class Portfolio_write_1 extends Component {
    render() {
        return (
            <div>
                <div className="portfolio">
                    <img src={img1} className="portfolio_banner"/>
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
                                                <div className="profile_content_left">2000.00.00</div>
                                                <div>서울과학기술대학교</div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">2000.00.00</div>
                                                <div>서울과학기술대학교</div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">2000.00.00</div>
                                                <div>서울과학기술대학교</div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="profile_my_box">
                                        <div className="profile_title">WORK</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <div className="profile_content_left">2000.00.00</div>
                                                <div>해법수학학원</div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">2000.00.00</div>
                                                <div>도미노예</div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="profile_my_box">
                                        <div className="profile_title">AWORDS</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <div className="profile_content_left">2000.00.00</div>
                                                <div>룰루어워드</div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">2000.00.00</div>
                                                <div>룰루어워드</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile_2">
                                    <div className="profile_my_box">
                                        <div className="profile_title">SKILLS</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <div className="profile_content_left">HTML</div>
                                                <div className="stack">
                                                    <div className="stack_on">45%</div>
                                                </div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">HTML</div>
                                                <div className="stack">
                                                    <div className="stack_on">45%</div>
                                                </div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">HTML</div>
                                                <div className="stack">
                                                    <div className="stack_on">45%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="profile_my_box">
                                        <div className="profile_title">ACHIVE</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <div className="profile_content_left">2000.00.00</div>
                                                <div>해법수학학원</div>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">2000.00.00</div>
                                                <div>도미노예</div>
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
                                <img className="projectImg"/>
                                <div className="project_contents">
                                    <div className="project_title">SEC PROJECT</div>
                                    <div className="project_period">2021.02.01 ~ 2021.08.17</div>
                                    <div className="project_text">
                                        홈페이지를 이용하는 사용자를 크게 일반 사용자와 상인으로 설정하고
                                        각 사용자층에 맞는 내용 추가, 불필요한 내용 삭제 홈페이지를 홈페이지를
                                        이용하는 사용자를 크게 일반 사용자와 상인으로 설정하고
                                        각 사용자층에 맞는 내용 추가, 불필요한 내용 삭제 홈페이지를
                                    </div>
                                    <div className="project_useT">사용 프로그램</div>
                                    <div className="project_useP">
                                        React, HTML, JavaScript, MySQL
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
                        <div className="portfolio_footer">ⓒ 2021. Myfolio. all rights reserved.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Portfolio_write_1);