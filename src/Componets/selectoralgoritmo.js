import React, { Component } from 'react';
import axios from 'axios';


class selectoralgoritmo extends Component {
  constructor(props) {
    super(props);
    this.state = {
       element_1: true,
       element_2: false,
       element_3: false,
       grafo: [],
       nodos_circulos:{
        '1': {
          'x': 150,
          'y': 200,
          'lx': 110,
          'ly': 180
        },
        '2':{
          'x': 300,
          'y': 100,
          'lx': 260,
          'ly': 80
        },
        '3':{
          'x': 300,
          'y': 300,
          'lx': 260,
          'ly': 280
        },
        '4':{
          'x': 500,
          'y': 100,
          'lx': 460,
          'ly': 80
        },
        '5':{
          'x': 500,
          'y': 300,
          'lx': 460,
          'ly': 280
        },
        '6':{
          'x': 700,
          'y': 100,
          'lx': 660,
          'ly': 80
        },
        '7':{
          'x': 700,
          'y': 300,
          'lx': 660,
          'ly': 280
        },
        '8':{
          'x': 850,
          'y': 200,
          'lx': 810,
          'ly': 180
        }
       },
       puntos_nodos: {
        '1': {
          'x': 150,
          'y': 170
        },
        '2':{
          'x': 270,
          'y': 100
        },
        '3':{
          'x': 270,
          'y': 240
        },
        '4':{
          'x': 470,
          'y': 100
        },
        '5':{
          'x': 470,
          'y': 240
        },
        '6':{
          'x': 670,
          'y': 100
        },
        '7':{
          'x': 670,
          'y': 240
        },
        '8':{
          'x': 790,
          'y': 170
        }
      }
      }
  }


  componentDidMount() {
    this.drawGrafo()
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
    let canvas = document.getElementById("myCanvas"); 
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.post(URL, formData,{
      headers: headers
    }
    )
    .then( (response)=> {
      var ruta_final  = ''
      response.data.ruta[0].forEach(element => {
        ruta_final += element + ' '
      });
      ruta.innerHTML = 'Ruta: ' + ruta_final.toUpperCase()
      for (let index = 0; index < response.data.ruta[0].length; index++) {
        if(index + 1  != response.data.ruta[0].length){
        this.linea_resultado(canvas, this.state.puntos_nodos[response.data.ruta[0][index]].x,
                                     this.state.puntos_nodos[response.data.ruta[0][index]].y,
                                     this.state.puntos_nodos[response.data.ruta[0][index+1]].x,
                                     this.state.puntos_nodos[response.data.ruta[0][index+1]].y)
                                    }
      }
    })
    .catch(function (error) {
      alert('Error:' + error)
    });

  }

  circle(canvas,x,y,r,arc0=0,arc1=2 * Math.PI) {
    let ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x-r, y-r, r, arc0, arc1);
    ctx.stroke();
  }

  text(canvas, x, y, letra){
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText(letra, x, y);
  }

  linea_resultado (canvas, x0, y0, x1, y1){
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.strokeStyle = '#FF0000';
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke()
  }

  linea(canvas,x0,y0,x1,y1){
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke()
  }


  drawGrafo(){
    let c = document.getElementById("myCanvas");
    let listItems
    fetch('http://localhost:8000/getGraph')
    .then(function(response) {
      return response.json();
    })
    .then((myJson)=> {
      if(myJson.status == '100'){
        this.setState({
          grafo: myJson.nodos
        });
        for (let n = 0; n < myJson.nodos.length; n++) {
        //Dibuja el nodo:
        var c_n = n + 1;
        this.circle(c,this.state.nodos_circulos[c_n].x, this.state.nodos_circulos[c_n].y, 30)
        this.text(c,this.state.nodos_circulos[c_n].lx, this.state.nodos_circulos[c_n].ly, c_n)
        }
        //Dibuja linea:
        for(let m = 0; m < myJson.aristas.length; m++){
          //var c_m = m + 1;
          this.linea(c, this.state.puntos_nodos[parseInt(myJson.aristas[m][0])].x, this.state.puntos_nodos[parseInt(myJson.aristas[m][0])].y, this.state.puntos_nodos[parseInt(myJson.aristas[m][1])].x, this.state.puntos_nodos[parseInt(myJson.aristas[m][1])].y)
        }
      }
    });
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
        {this.state.grafo.map((number) =>
          <option>{number}</option>
        )}
        </select>
        <label for="exampleFormControlSelect1">Nodo final:</label>
        <select disabled = {(this.state.element_3)? "disabled" : ""} className="form-control mr-1" id="final">
        {this.state.grafo.map((number) =>
          <option>{number}</option>
        )}
        </select>
        <button type="button" className="btn btn-success ml-1 col-1" onClick = {this.handleClik.bind(this)}>Ejecutar</button>
        </div>
      </div>
      )
  } 
}




export default selectoralgoritmo;
