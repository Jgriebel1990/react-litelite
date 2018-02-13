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
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState =
  }
  render() {
   
    
    return (
      <div className='container'>
        <div className='row'>
          <div onClick={this.setState} className='col-md-1 box' style={this.state.box}></div>
        </div>
      </div>
    );
  }
}

export default App;
