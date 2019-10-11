import React from 'react';
import cytoscape from 'cytoscape';
import  SelectorAlgoritmo  from './Componets/selectoralgoritmo'
import  SelectorGrafo from './Componets/selectorgrafo'


function App() {
  var cy = cytoscape({
    container: document.getElementById('cy') // container to render in
  });
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-info">
      <a className="navbar-brand text-white">Practica 2</a>
      </nav>
      <div className="container">
        <SelectorAlgoritmo/>
        <div className="row">
          <div className="col-4">
            <SelectorGrafo name="A"/>
            <SelectorGrafo name="B"/>
            <SelectorGrafo name="C"/>
            <SelectorGrafo name="D"/>
            <SelectorGrafo name="E"/>
            <SelectorGrafo name="F"/>
            <SelectorGrafo name="G"/>
            <SelectorGrafo name="H"/>
          </div>
          <div className="col-8">
            <div className="border border-primary col-12" id="myCanvas">
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
