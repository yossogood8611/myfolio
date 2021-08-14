import React, {Component} from 'react';
import Header from '../../components/header/Header';
import Banner from '../../image/main_banner.svg';
import './main.css';

class MainPage extends Component {
    render() {
        return (
            <div>
                <div className="main_page">
                    <Header/>
                    <img src={Banner} className="banner"/>
                </div>
            </div>
        );
    }
}

export default MainPage;