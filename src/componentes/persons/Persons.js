import React, { useEffect, useState } from 'react';
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
                        <Person person={person}></Person>
                    ))}
                </tbody>
            </table> 
        </div>
    );
}

export default Persons;