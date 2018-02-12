import React, { Component } from 'react';
import Grid from './Grid.js';


class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  
  render() {

    const styles = StyleSheet.create({
 
      container: {
     
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
     
      SquareShapeView: {
     
        width: 120,
        height: 120,
        backgroundColor: '#00BCD4'
     
      },
     
      RectangleShapeView: {
     
      marginTop: 20,
      width: 120 * 2,
      height: 120,
      backgroundColor: '#FFC107'
     
      }
    
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>$</div>
        </div>
      </div>
    );
  }
}

export default App;
