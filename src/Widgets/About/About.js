import React, {Component} from 'react'
import './About.css'
import LoadingIcon from './../General/Delayed/LoadingIcon';
import Delayed from './../General/Delayed/Delayed';
import InvDelayed from './../General/Delayed/InvDelayed';

class About extends Component {
    render() {
        return (
            <div className="about_page">
                <div className="top">
                    <div className="name">TYLER KIM</div>
                    <div className='role'>Software Engineer</div>   
                </div>
                <InvDelayed waitBeforeHide={500}> 
                    <LoadingIcon />
                </InvDelayed>
                <Delayed waitBeforeShow={500}> 
                    <div className="content">
                        <div className='about_box'>
                            <div>In addition to software development, I can play violin for you or a loved one's wedding! </div>
                            <br />
                            <div className="shoutout">Shoutout to <a className="jeannine" href="https://www.jeanninepoundphotography.com/" target="_blank"><span id="backdrop">Jeannine Pound Photography.</span></a> She does a marvelous job.</div>
                        </div>
                        <img className="about_img" src="TylerViolin.jpg" alt=""/>
                    </div>
                </Delayed>
            </div>
        )
    }
}

export default About