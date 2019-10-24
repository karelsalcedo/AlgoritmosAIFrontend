import React from 'react';
import  SelectorAlgoritmo  from './Componets/selectoralgoritmo'
import  SelectorGrafo from './Componets/selectorgrafo'
import  Canvas from './Componets/canvas'


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
            <Canvas/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <h3 className="text-center">Nodos Y Aristas</h3>
          </div>
        </div>
        <div className="row">
        <div className="col">
            <SelectorGrafo name="A"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
