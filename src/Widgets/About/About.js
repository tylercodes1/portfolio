import React, {Component} from 'react'
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="about_page">
                <div className="top">
                    <div className="name">TYLER KIM</div>
                    <div className='role'>Software Engineer</div>   
                </div>
                <div className="content">
                    <div className='about_box'>
                        <div className='about'>{"I am ecstatic to be alive. Some of the hobbies that I hold dear to my heart include playing music. I was a classically trained violinist and I will play you or a loved one's wedding if the opportunity arises. I also enjoy playing the guitar and piano, but I'm nowhere near as proficient. I've been studying computer science for nearly 3 years through self-directed learning on edX. Additionally, I graduated from the University of Washington with a degree in finance (go dawgs!). I would love to stay and work in the Pacific Northwest, and I hope you can find room in your heart (and payroll) to include me as well <3. Let's get to work!"}</div>
                    </div>
                    <div className="left">
                        <img className="about_img" src="TylerViolin.jpg" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About