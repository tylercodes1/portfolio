import React, {Component} from 'react'
import './Home.css'
import LoadingIcon from './../../Components/LoadingIcon.js';

class Home extends Component {

    render() {
        return (
            <div className="home_page">
                <LoadingIcon />
            </div>
        )
    }
}

export default Home