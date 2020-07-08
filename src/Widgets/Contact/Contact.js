import React, {Component} from 'react'
import './Contact.css'
import Linkedin from './../../assets/linkedin/linkedin';
import Mail from '../../assets/generic/mail/Mail';
import Phone from '../../assets/generic/phone/Phone';

class Contact extends Component {
    render() {
        return (
            <div className="contact_page">
                <div className="contact_box">
                    <div className="contact_head"><span id="hi">Hi!</span> You can reach me at:</div>
                    <div className="contact_items">
                        <a target="_blank" href="https://www.linkedin.com/in/tylerkim11/">
                            <div className="contact_item">
                                <Linkedin class="c_linkedin" id1="c_linkedin1" id2="c_linkedin2"/>
                            </div>
                        </a>
                        <a target="_blank" href="mailto: tylerkim1911@gmail.com">
                            <div className="contact_item">
                                <Mail class="c_mail" id="c_mail"/>
                            </div>
                        </a>
                        <a href='tel:4259228611'>
                            <div className="contact_item">
                                <Phone class="c_phone" id="c_phone"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact