import React, { Component } from 'react';



class App extends Component {
  constructor(){
    super();
    this.state = {
      currentColor: '#ff0000',
      boxes:[
        {
          backgroundColor: ''
        },
        {
          backgroundColor: ''
        },
        {
          backgroundColor: ''
        },
      ]
    }
    this.changeColor = this.changeColor.bind(this);
    this.setSelectedColor = this.setSelectedColor.bind(this);
  }
  changeColor(position){
    const currentBox = this.state.boxes[position];
    const first = this.state.boxes.splice(0, position);
    const last = this.state.boxes.splice(position +1);
    const newBox = {
      ...currentBox,
      backgroundColor: this.state.currentColor
      
    }
    const newBoxes = [
      ...first,
      newBox,
      ...last,
    ]  
    this.setState({boxes: newBoxes});
  }
  render() {
    const boxes = this.state.boxes.map((box, index) => <div key={index}
                                                        className='col-md-1 box' 
                                                        style={box}
                                                        onClick={() => this.changeColor(index)}></div>)
    return (
      <div className='container'>
        <div className='row'>
        <input type="color"
        value={this.state.currentColor}
                onChange={(e) => this.setSelectedColor(e)}/>
          
        </div>
      </div>
    );
  }
}

export default App;
