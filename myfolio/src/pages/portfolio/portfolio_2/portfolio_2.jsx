import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import './portfolio_2.css';
import Img from '../../../image/portfolio_2-1.svg';
import History from '../../../image/portfolio_2_history.svg';

class Portfolio_2 extends Component {
    render() {
        return (
            <div>
                <div className="portfolio">
                    <img className="portfolio_banner" src={Img}/>
                    <div className="down_btn"> </div>
                    <div className="portfolio_part">
                        <div className="part_left">
                            <div className="part_left_num">01</div>
                            <div className="part_left_title">About Me</div>
                        </div>
                        <div className="part_right_01">
                            <div className="profile_box">
                                <img className="profile_box_img"/>
                                <div className="profile_box_content">
                                    <div className="profile_box_content_text">
                                        '신호등'은 이제 막 성인이 된 청춘의 심정을 담은 곡으로, '사회'라는
                                        울타리 안에서 인간관계, 법, 융통성, 돈 등 복잡한 사회적 개념과 법칙을
                                        겪으며 혼란스러워하는 20대의 고민을 담았다.
                                        곡 안에서는 사람과 사회를 각각 자동차와 도로에 비유하였고,
                                        살아가며 지켜야 하는 수많은 규칙을 신호등에 비유하였다.
                                    </div>
                                    <div className="profile_box_content_mini">Visual Designer</div>
                                    <div className="profile_box_content_mini">2021.08.15</div>
                                </div>
                            </div>
                            <div className="profile_history">
                                <div className="history_up">
                                    <div className="history_box">
                                        <div className="history_title">MyFolio</div>
                                        <div className="history_sub">2021.08.15</div>
                                    </div>
                                    <div className="history_box">
                                        <div className="history_title">MyFolio</div>
                                        <div className="history_sub">2021.08.15</div>
                                    </div>
                                    <div className="history_box">
                                        <div className="history_title">MyFolio</div>
                                        <div className="history_sub">2021.08.15</div>
                                    </div>
                                </div>
                                <img src={History} className="history"/>
                                <div className="history_down">
                                    <div className="history_box">
                                        <div className="history_title">MyFolio</div>
                                        <div className="history_sub">2021.08.15</div>
                                    </div>
                                    <div className="history_box">
                                        <div className="history_title">MyFolio</div>
                                        <div className="history_sub">2021.08.15</div>
                                    </div>
                                    <div className="history_box">
                                        <div className="history_title">MyFolio</div>
                                        <div className="history_sub">2021.08.15</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_part">
                        <div className="part_left">
                            <div className="part_left_num">02</div>
                            <div className="part_left_title">Skills</div>
                        </div>
                        <div className="part_right_01">

                        </div>
                    </div>
                    <div className="portfolio_part">
                        <div className="part_left">
                            <div className="part_left_num">03</div>
                            <div className="part_left_title">
                                Experience <br/>
                                & Achieve
                            </div>
                        </div>
                        <div className="part_right_01">

                        </div>
                    </div>
                    <div className="portfolio_part">
                        <div className="part_left">
                            <div className="part_left_num">04</div>
                            <div className="part_left_title">Projects</div>
                        </div>
                        <div className="part_right_01">

                        </div>
                    </div>
                    <div className="portfolio_part">
                        <div className="part_left">
                            <div className="part_left_num">05</div>
                            <div className="part_left_title">Contact Me</div>
                        </div>
                        <div className="part_right_01">

                        </div>
                    </div>
                    <div className="portfolio_footer">ⓒ 2021. Myfolio. all rights reserved.</div>
                </div>
            </div>
        );
    }
}

export default withRouter(Portfolio_2);