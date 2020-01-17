import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './componentes/layout/Navbar'
import Persons from './componentes/persons/Persons'
import EditPerson from './componentes/persons/EditPerson'
import NewPerson from './componentes/persons/NewPerson'
import Accounts from './componentes/accounts/Accounts'
import axios from 'axios'

function App() {
  const [ persons, savePersons ] = useState([])
  const [ refresh, saveRefresh ] = useState(true)
  useEffect(() => {
    if (refresh) {
      const getPersons = async () => {
        const result = await axios.get('http://localhost:4000/api/persons/')
        savePersons(result.data.data)
      }
      getPersons()
      saveRefresh(false)
    }
  },[refresh])
  return (  
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container">
        <Switch>
          <Route exact path="/personas" render={() => (
            <Persons persons={persons} saveRefresh={saveRefresh}/>
          )}></Route>
          <Route exact path="/persona/nuevo" render={() => (
            <NewPerson saveRefresh={saveRefresh}/>
          )}></Route>
          <Route exact path="/persona/editar/:id" render={props =>{
            const idPerson = parseInt(props.match.params.id);
            const person = persons.filter(per => per.id === idPerson)
            return (
              <EditPerson person={person[0]} saveRefresh={saveRefresh}/>
            )
          }}></Route>
          <Route exact path="/cuentas" component={Accounts}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
