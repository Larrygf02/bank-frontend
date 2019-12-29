import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './componentes/layout/Navbar'
import Persons from './componentes/persons/Persons'
import EditPerson from './componentes/persons/EditPerson'
import NewPerson from './componentes/persons/NewPerson'
import Accounts from './componentes/accounts/Accounts'

function App() {
  return (  
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container">
        <Switch>
          <Route exact path="/personas" component={Persons}></Route>
          <Route exact path="/persona/nuevo" component={NewPerson}></Route>
          <Route exact path="/persona/editar/:id" component={EditPerson}></Route>
          <Route exact path="/cuentas" component={Accounts}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
