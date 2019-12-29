import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './componentes/layout/Navbar'
import Personas from './componentes/personas/Personas'
import Cuentas from './componentes/cuentas/Cuentas'

function App() {
  return (  
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container">
        <Switch>
          <Route exact path="/personas" component={Personas}></Route>
          <Route exact path="/cuentas" component={Cuentas}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
