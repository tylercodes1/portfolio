import React, {Component} from 'react'
import './Home.css'
import TKViolin from './../../assets/thresholds/tkviolin';
import BlockButton from '../Misc/Buttons/BlockButton';

class Home extends Component {
    render() {
        return (
            <div className="home_page">
                <TKViolin />
                <div className="home_msg">
                    <span id="first_line">I'm <span className="highlight">seeking employment,</span></span><span>but you can call me <span className="highlight">Tyler.</span></span>
                </div>
                <a href="TylerKim2020.docx" download="Tylers Resume.docx">
                    <BlockButton text="RESUME"></BlockButton>
                </a>
            </div>
        )
    }
}

export default Home