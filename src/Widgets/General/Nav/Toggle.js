import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor() {
        super() 
        this.state = {
            on: false
        }
    }

    toggle() {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggle()}>Show/Hide</button>
                {this.state.on ? 'on' : 'off'}
            </div>
        )
    }
}
