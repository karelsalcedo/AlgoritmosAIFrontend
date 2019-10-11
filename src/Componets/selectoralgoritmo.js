import React, { Component } from 'react';


class selectoralgoritmo extends Component {
  constructor(props) {
    super(props);
    this.state = {
       element_1: true,
       element_2: false,
       element_3: false,
      }
  }
  _handleChange = (event) => {
    if(event.target.value === 'dijkstra'){
      this.setState( {
        element_1: true,
        element_2: false,
        element_3: false,
      } )
    }
    else if(event.target.value === 'prim'){
      this.setState( {
        element_1: true,
        element_2: false,
        element_3: true,
      } )
    }
    else if(event.target.value === 'kruskal'){
      this.setState( {
        element_1: false,
        element_2: true,
        element_3: true,
      } )
    }
  }

  handleClik() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var ctx1 = c.getContext("2d");
    var ctx2 = c.getContext("2d");
    var ctx3 = c.getContext("2d");
    var ctx4 = c.getContext("2d");
    var ctx5 = c.getContext("2d");
    var ctx6 = c.getContext("2d");
    var ctx7 = c.getContext("2d");
    var ctx8 = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(15, 15, 10, 1, 1 * Math.PI);
    ctx1.arc(35, 35, 10, 1, 1 * Math.PI);
    ctx2.arc(55, 55, 10, 1, 1 * Math.PI);
    ctx3.arc(95, 95, 10, 1, 1 * Math.PI);
    ctx4.arc(105, 105, 10, 0, 1 * Math.PI);
    ctx5.arc(125, 135, 10, 0, 1 * Math.PI);
    ctx6.arc(195, 155, 10, 0, 1 * Math.PI);
    ctx7.arc(205, 195, 10, 0, 1 * Math.PI);
    ctx8.stroke();
  } 

  render() {
      return (
        <div className="form-group mt-5">
        <label for="exampleFormControlSelect1">Tipo de algoritmo:</label>
        <div className="form-inline">
        <select className="form-control col-4 mr-1" id="exampleFormControlSelect1" onChange={this._handleChange}>
          <option>dijkstra</option>
          <option>prim</option>
          <option>kruskal</option>
        </select>
        <select disabled = {(this.state.element_1)? "disabled" : ""} className="form-control col-2 mr-1" id="exampleFormControlSelect1" onChange={this._handleChange}>
          <option>Minimo</option>
          <option>Maximo</option>
        </select>
        <label for="exampleFormControlSelect1 ml-1">Nodo de inicio:</label>
        <select disabled = {(this.state.element_2)? "disabled" : ""} className="form-control mr-1" id="exampleFormControlSelect1">
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
            <option>e</option>
            <option>f</option>
            <option>g</option>
            <option>h</option>
        </select>
        <label for="exampleFormControlSelect1 ml-1">Nodo final:</label>
        <select disabled = {(this.state.element_3)? "disabled" : ""} className="form-control mr-1" id="exampleFormControlSelect1">
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
            <option>e</option>
            <option>f</option>
            <option>g</option>
            <option>h</option>
        </select>
        <button type="button" className="btn btn-success ml-1 col-1" onClick = {this.handleClik.bind(this)}>Ejecutar</button>
        </div>
      </div>
      )
  } 
}




export default selectoralgoritmo;
