import React from 'react';
import  SelectorAlgoritmo  from './Componets/selectoralgoritmo'
import  SelectorGrafo from './Componets/selectorgrafo'


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-info">
      <a className="navbar-brand text-white" href="/">Practica 2</a>
      </nav>
      <div className="container">
        <SelectorAlgoritmo/>
        <div className="row">
          <div className="col-12">
            <h4 id="ruta">Ruta: ---</h4>
            <canvas width='100%' height='400px' className="border border-primary" id="myCanvas">
            </canvas>
          </div>
        </div>
        <div className="row">
        <div className="col">
            <SelectorGrafo name="A"/>
            <SelectorGrafo name="B"/>
            <SelectorGrafo name="C"/>
            <SelectorGrafo name="D"/>
            <SelectorGrafo name="E"/>
            <SelectorGrafo name="F"/>
            <SelectorGrafo name="G"/>
            <SelectorGrafo name="H"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
