import React, {Component} from 'react'
import './Home.css'
import TKViolin from './../../assets/thresholds/tkviolin';

class Home extends Component {

    render() {
        return (
            <div className="home_page">
                <TKViolin />
                <div className="home_msg">
                    <span id="first_line">I'm <span className="highlight">seeking employment,</span></span><span>but you can call me <span className="highlight">Tyler</span></span>
                </div>
                <a href="src\assets\resume\TylerKim2020.docx" download="Tylers Resume.docx">
                    <div className="resume">RESUME</div>
                </a>
            </div>
        )
    }
}

export default Home