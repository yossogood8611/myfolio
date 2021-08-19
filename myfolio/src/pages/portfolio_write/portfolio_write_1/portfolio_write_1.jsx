import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import Header from '../../../components/header/Header';
import img1 from '../../../image/portfolio_1-1.svg';
import '../../portfolio/portfolio_1/portfolio.css';

class Portfolio_write_1 extends Component {
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
                                    <input className="input" placeholder={'이름 입력'}/>
                                    <input className="input" placeholder={'생년월일 입력'}/>
                                    <input className="input" placeholder={'간단한 직업 소개'}/>
                                </div>
                                <div className="profile_2">
                                    <div className="profile_my_box">
                                        <div className="profile_title">EDUCATION</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <input className="input" placeholder={'졸업년도'}/>
                                                <input className="input" placeholder={'기관명'}/>
                                            </div>
                                            <div className="profile_content">
                                                <input className="input" placeholder={'졸업년도'}/>
                                                <input className="input" placeholder={'기관명'}/>
                                            </div>
                                            <div className="profile_content">
                                                <input className="input" placeholder={'졸업년도'}/>
                                                <input className="input" placeholder={'기관명'}/>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="profile_my_box">
                                        <div className="profile_title">WORK</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <input className="input" placeholder={'입사년도'}/>
                                                <input className="input" placeholder={'기관명'}/>
                                            </div>
                                            <div className="profile_content">
                                                <input className="input" placeholder={'입사년도'}/>
                                                <input className="input" placeholder={'기관명'}/>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="profile_my_box">
                                        <div className="profile_title">AWORDS</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <input className="input" placeholder={'수상년도'}/>
                                                <input className="input" placeholder={'수상명'}/>
                                            </div>
                                            <div className="profile_content">
                                                <input className="input" placeholder={'수상년도'}/>
                                                <input className="input" placeholder={'수상명'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile_2">
                                    <div className="profile_my_box">
                                        <div className="profile_title">SKILLS</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <input className="input" placeholder={'기술명'}/>
                                                <input className="input" placeholder={'숙련도'}/>
                                            </div>
                                            <div className="profile_content">
                                                <input className="input" placeholder={'기술명'}/>
                                                <input className="input" placeholder={'숙련도'}/>
                                            </div>
                                            <div className="profile_content">
                                                <input className="input" placeholder={'기술명'}/>
                                                <input className="input" placeholder={'숙련도'}/>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="profile_my_box">
                                        <div className="profile_title">CONTACT</div>
                                        <div className="profile_contents">
                                            <div className="profile_content">
                                                <div className="profile_content_left">Phone</div>
                                                <input className="input" placeholder={'phone number'}/>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">E-mail</div>
                                                <input className="input" placeholder={'email'}/>
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_left">Instargram</div>
                                                <input className="input" placeholder={'instargram id'}/>
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
                                    <input className="project_title" placeholder="프로젝트 제목"/>
                                    <input className="project_period" placeholder="프로젝트 진행 기간"/>
                                    <input className="project_text" placeholder="프로젝트 설명"/>
                                    <div className="project_useT">사용 프로그램</div>
                                    <div className="project_useP">
                                        <input className="input" placeholder="사용 프로젝트"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hr">ㅤ</div>
                    <Link to={`/mypage`}>
                        <div className="write_done">작성 완료</div>
                    </Link>

                    <div className="portfolio_part_4">
                        <div className="portfolio_footer1">ⓒ 2021. Myfolio. all rights reserved.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Portfolio_write_1);