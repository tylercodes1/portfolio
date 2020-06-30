import React, {Component} from 'react';
import './App.css';
import Nav from './Nav/Nav'
import SideDrawer from './Nav/SideDrawer/SideDrawer'
import Backdrop from './Nav/Backdrop/Backdrop'

class App extends Component {
  
  constructor() {
    super() 
    this.state = {
      sideDrawerOpen: false
    }
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this)
    this.backdropClickHandler = this.backdropClickHandler.bind(this)
  }
  
  drawerToggleClickHandler() {
    console.log('i made it')
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    })
  }

  backdropClickHandler() {
    this.setState(() => {
      return {
        sideDrawerOpen: false
      }
    })
  }

  render() {
    let sideDrawer;
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop onClick={this.backdropClickHandler}/>
    }
    return (
      <div className="App">
        {/* // NavBar / Header */}
        <Nav onClick={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main className="main">
          <p className="content">This is the page content</p>
        </main>
        {/* // FilterBar */}
        {/* // Body */}
      </div>
    )
  }
}


export default App;
