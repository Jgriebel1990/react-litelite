import React, { Component } from 'react';

class Grid extends Component {
    render(){
        
        const box = {
            container: {
                height: 100px,
                width: 100px,
                
                
                
            }
        }
        
        
        

        return(
            <div className='container'>
                <div className='col-md-6' style={{display: 'inlineBlock', width:'100px', height:'100px'}}></div>
            </div>
        );
       
    }
}

export default Grid;