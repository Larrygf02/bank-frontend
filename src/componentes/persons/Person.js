import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function Person({person, saveRefresh}) {
    const deletePerson = async id => {
        const response = await axios.delete(`http://localhost:4000/api/persons/${person.id}`)
        if (response.status === 200) {
            saveRefresh(true)
        }
    }

    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.surname}</td>
            <td>{person.dni}</td>
            <td>{person.birth_date}</td>
            <td>
                <Link 
                to={`/persona/editar/${person.id}`} 
                className="btn btn-primary mr-2">Editar</Link>
                <button className="btn btn-danger"
                    onClick={() => deletePerson(person.id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default Person;