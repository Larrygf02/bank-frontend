import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <nav className="navbar navbar-light">
      <span className="navbar-brand mb-0 h1">
          Administracion del Banco
      </span>
  </nav>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to={'/personas'} className="nav-link">
            Personas
        </Link>
      </li>
      <li className="nav-item">
        <Link to={'/cuentas'} className="nav-link">
            Cuentas
        </Link>
      </li>
    </ul>
  </div>
</nav>
        );
    }
}

export default Navbar;