import React, { Component } from 'react';
import axios from 'axios';


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
    const formData = new FormData()

    const tipo_algoritmo = document.getElementById('exampleFormControlSelect1')
    const inicio = document.getElementById('inicio')
    const final = document.getElementById('final')
    const max_min = document.getElementById('maxi_min')

    
    if(tipo_algoritmo.value === 'dijkstra'){
      formData.append('tipo_algoritmo', tipo_algoritmo.value)
      formData.append('inicio', inicio.value)
      formData.append('final', final.value)
      this.sendService(formData)
    }
    else if(tipo_algoritmo.value === 'prim'){
      formData.append('tipo_algoritmo', tipo_algoritmo.value)
      formData.append('inicio', inicio.value)
      this.sendService(formData)
    }
    else if(tipo_algoritmo.value === 'kruskal'){
      formData.append('tipo_algoritmo', tipo_algoritmo.value)
      formData.append('max_min', max_min.value)
      this.sendService(formData)
    }    
  }
  
  sendService(formData){
    const URL = 'http://localhost:8000/getData'
    const ruta = document.getElementById('ruta')
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.post(URL, formData,{
      headers: headers
    }
    )
    .then(function (response) {
      console.log(response);
      var ruta_final  = ''
      response.data.ruta.forEach(element => {
        ruta_final += element + '->'
      });
      ruta.innerHTML = 'Ruta: ' + ruta_final.toUpperCase()
    })
    .catch(function (error) {
      alert('Error:' + error)
    });

  }

  drawGrafo(){
    var c = document.getElementById("myCanvas");
    
    this.circle(c,225, 225, 20)
    this.linea(c,25, 25, 35, 35)
    this.circle(c,45, 45, 10)
    this.circle(c,65, 65, 10)
    this.circle(c,105, 105, 10)
    this.circle(c,115, 115, 10)
    this.circle(c,135, 145, 10)
    this.circle(c,205, 165, 10)
    this.circle(c,215, 205, 10)
  }

  circle(canvas,x,y,r,arc0=0,arc1=2 * Math.PI) {
    let ctx = canvas.getContext("2d");
    
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x-r, y-r, r, arc0, arc1);
    ctx.stroke();
  }

  linea(canvas,x0,y0,x1,y1){
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke()
  }

  render() {
      return (
        <div className="form-group mt-5">
        <label>Tipo de algoritmo:</label>
        <div className="form-inline">
        <select className="form-control col-4 mr-1" id="exampleFormControlSelect1" onChange={this._handleChange}>
          <option>dijkstra</option>
          <option>prim</option>
          <option>kruskal</option>
        </select>
        <select disabled = {(this.state.element_1)? "disabled" : ""} className="form-control col-2 mr-1" id="maxi_min" onChange={this._handleChange}>
          <option>Minimo</option>
          <option>Maximo</option>
        </select>
        <label>Nodo de inicio:</label>
        <select disabled = {(this.state.element_2)? "disabled" : ""} className="form-control mr-1" id="inicio">
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
            <option>e</option>
            <option>f</option>
            <option>g</option>
            <option>h</option>
        </select>
        <label for="exampleFormControlSelect1">Nodo final:</label>
        <select disabled = {(this.state.element_3)? "disabled" : ""} className="form-control mr-1" id="final">
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
