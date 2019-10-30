import React, { Component } from 'react';
import axios from 'axios';



  class selectorgrafo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        grafo: [],
        aristas: [],
        nodo: false,
        data: [1,2,3,4,5,6,7,8]
        }
    }

  componentDidMount() {
      this.getData()
  }
  //Nueva arista
  handleClik() {
    const formData = new FormData()

    const inicio = document.getElementById('punto_inicial')
    const final = document.getElementById('punto_final')
    const peso = document.getElementById('peso')
    if(peso.value == "" || peso.value == "0"){
      alert('El valor debe ser mayor a 1 para continuar.')
    }
    else{
      //Guardar data
      const formData = new FormData()
      formData.append('inicio', inicio.value)
      formData.append('fin', final.value)
      formData.append('peso', peso.value)
      const headers = {
        'Content-Type': 'application/json',
      }
      axios.post('http://localhost:8000/addarista', formData,{
        headers: headers
      }
      )
      .then( (response)=> {
       window.location.reload(false);
      })
      .catch(function (error) {
        alert('Error:' + error)
      });

    }
   
  }
  //Nuevo nodo
  handleClikNodo(){
    const nodo = document.getElementById('nodo_nuevo')
    if(this.state.grafo.length == 8){
      alert('No se puede crear un nuevo nodo. Maximo 8 nodos.')
    }
    else{
      //manda a crear un nuevo nodo.
      const formData = new FormData()
      
    formData.append('nodo', nodo.value)
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.post('http://localhost:8000/addnodo', formData,{
      headers: headers
    }
    )
    .then( (response)=> {
      window.location.reload(false);
    })
    .catch(function (error) {
      alert('Error:' + error)
    });
    }
  }
 //Eliminar arista
  DeleteAri(e){
    const formData = new FormData()
    formData.append('arista', e)
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.post('http://localhost:8000/deleteAri', formData,{
      headers: headers
    }
    )
    .then( (response)=> {
      window.location.reload(false);
    })
    .catch(function (error) {
      alert('Error:' + error)
    });
  }
  //Eliminar nodo
  DeleteNodo(e){
    const formData = new FormData()
    formData.append('nodo', e)
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.post('http://localhost:8000/deleteNodo', formData,{
      headers: headers
    }
    )
    .then( (response)=> {
      window.location.reload(false);
    })
    .catch(function (error) {
      alert('Error:' + error)
    });
  }
 //Obtener Grafo
  getData(){
    fetch('http://localhost:8000/getGraph')
    .then(function(response) {
      return response.json();
    })
    .then((myJson)=> {
      if(myJson.status == '100'){
        this.setState({
          grafo: myJson.nodos,
          aristas: myJson.aristas
        });
      }
    });
  }

  render() {
      return (
        <div>
        <div className="row mt-2">
          <div className="col-12">
            <h3 className="text-center">Nodos</h3>
          </div>
          <div className="row">
          <div className="col">
            <label for="exampleFormControlSelect1">Nodo:</label>
            <select className="form-control" id="nodo_nuevo">
            {this.state.data.map((number) =>
               <option>{number}</option> 
            )}
            </select>
            </div>
          <div className="col">
            <button type="button" disabled = {(this.state.nodo)? "disabled" : ""} class="btn btn-success col-12 mt-4" onClick = {(e)=>this.handleClikNodo()}>Crear Nodo</button>  
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <table class="table">
         <thead>
           <tr>
             <th scope="col">Nodo</th>
             <th scope="col">Acciones</th>
           </tr>
         </thead>
         <tbody>
           {this.state.grafo.map((number) =>  
              <tr>
              <th key={number.toString()}>{number}</th>
              <th key={number.toString()}><a className="text-danger" onClick ={(e)=>this.DeleteNodo(number)} key={number.toString()}>Eliminar</a></th>
              </tr>
            )}
         </tbody>
       </table> 
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <h3 className="text-center">Aristas</h3>
          </div>
        </div>
        <div className="form-group row">
            <div className="col-3">
            <label for="exampleFormControlSelect1">Nodo Inicial:</label>
            <select className="form-control mr-1" id="punto_inicial">
            {this.state.grafo.map((number) =>
              <option>{number}</option>
            )}
            </select>
            </div>
            <div className="col-3">
            <label for="exampleFormControlSelect1">Nodo Final:</label>
            <select className="form-control mr-1" id="punto_final">
            {this.state.grafo.map((number) =>
              <option>{number}</option>
            )}
            </select>  
            </div>
            <div className="col-3">
            <label for="exampleFormControlSelect1">Peso:</label>  
            <input type="number" class="form-control" id="peso" ></input>
            </div>
            <div className="col-3">
            <button type="button" class="btn btn-success col-12 mt-4" onClick = {(e)=>this.handleClik()}>Guardar</button>  
            </div>
          </div>
         <table class="table">
         <thead>
           <tr>
             <th scope="col">Nodo Inicio</th>
             <th scope="col">Nodo Fin</th>
             <th scope="col">Peso</th>
             <th scope="col">Acciones</th>
           </tr>
         </thead>
         <tbody>
           
           {this.state.aristas.map((number) =>  
              <tr>
              <th key={number.toString()}>{number[0]}</th>
              <th key={number.toString()}>{number[1]}</th>
              <th key={number.toString()}>{number[2]}</th>
              <th onClick = {(e)=>this.DeleteAri(number)} key={number.toString()}><a className="text-danger">Eliminar</a></th>
              </tr>
            )}
         </tbody>
       </table> 
       </div>
      )
  } 
}

export default selectorgrafo;
