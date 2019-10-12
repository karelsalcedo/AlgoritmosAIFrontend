import React from 'react';


function selectorgrafo(props) {
  return (
    <div className="selectorgrafo">
        <div className="row mt-12">
          <label>Nodo {props.name}:</label>
        </div>
        <div className="form-inline col-12">
          <div className="row mt-1">
          <select className="form-control mr-12" id="exampleFormControlSelect1">
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
            <option>e</option>
            <option>f</option>
            <option>g</option>
            <option>h</option>
          </select>
          <input type="number" className="form-control" id="valor" placeholder="Valor" min="0" max="100"></input>
          </div>
          <div className="row mt-12">
          <select class="form-control mr-1" id="exampleFormControlSelect1">
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
            <option>e</option>
            <option>f</option>
            <option>g</option>
            <option>h</option>
          </select>
          <input type="number" class="form-control" id="valor" placeholder="Valor" min="0" max="100"></input>
          </div>
          <div className="row mt-12">
          <select class="form-control mr-1" id="exampleFormControlSelect1">
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
            <option>e</option>
            <option>f</option>
            <option>g</option>
            <option>h</option>
          </select>
          <input type="number" class="form-control" id="valor" placeholder="Valor" min="0" max="100"></input>
          </div>
        </div>
        <div className="row mt-1">
        <button type="button" class="btn btn-danger">Eliminar Nodo</button>
        </div>
    </div>
  );
}

export default selectorgrafo;
