import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <nav className="navbar navbar-light">
      <span className="navbar-brand mb-0 h1">
          Administracion del Banco
      </span>
  </nav>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link to={'/personas'} className="nav-link">
            Personas
        </Link>
      </li>
      <li class="nav-item">
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