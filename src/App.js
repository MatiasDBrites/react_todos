import React from "react";
import { Switch , Link, Route, Router } from "wouter";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import Preguntas from "./components/Preguntas";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
          <Link to="/preguntas" className="btn btn-dark">
            Preguntas
          </Link>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/preguntas">
            <Preguntas />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
