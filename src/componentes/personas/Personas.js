import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Personas = () => {
    const [ persons, savePersons ] = useState([])
    //const [ recargarPersonas, guardarRecargarPersonas ] = useState(true)
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
                    </tr>
                </thead>
                <tbody>
                    {persons.map(person => (
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.surname}</td>
                            <td>{person.dni}</td>
                            <td>{person.birth_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    );
}

export default Personas;