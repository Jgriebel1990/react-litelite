import React, { Component } from 'react';



class App extends Component {
  constructor(){
    super();
    this.state = {
      box: 
        {
          backgroundColor: '',
          color:'red',
        }
    }
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(){
    console.log('here');
  }
  render() {
   
    
    return (
      <div className='container'>
        <div className='row'>
          <div onClick={this.changeColor} className='col-md-1 box' style={this.state.box}></div>
        </div>
      </div>
    );
  }
}

export default App;
