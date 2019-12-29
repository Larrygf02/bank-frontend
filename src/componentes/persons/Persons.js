import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Person from './Person'

const Persons = () => {
    const [ persons, savePersons ] = useState([])
    //const [ recargarPersons, guardarRecargarPersons ] = useState(true)
    useEffect(() => {
        const getPersons = async () => {
            const result = await axios.get('http://localhost:4000/api/persons/')
            savePersons(result.data.data)
        }
        getPersons()
    }, [])
    return (
        <div className="row">
            <div className="col-md-8 mb-2">
                <h2>
                    <i className="fas fa-user"></i> {''}
                    Personas
                </h2>
            </div>
            <div className="col-md-4">
                <Link to="/persona/nuevo" className="btn btn-success">
                    <i className="fas fa-plus"></i> {''}
                    Nueva persona
                </Link>
            </div>
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                    <th scope="col">Nombres</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">DNI</th>
                    <th scope="col">Fecha Nacimiento</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map(person => (
                        <Person key={person.id} person={person}></Person>
                    ))}
                </tbody>
            </table> 
        </div>
    );
}

export default Persons;