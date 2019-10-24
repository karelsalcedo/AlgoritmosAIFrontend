import React, { Component } from 'react';

class canvas extends Component{
    render(){
        return(
            <div>
            <h4 id="ruta">Ruta: ---</h4>
            <canvas width='1000px' height='400px' className="border border-primary" id="myCanvas">
            </canvas>
            </div>
        );
    }
}

export default canvas;