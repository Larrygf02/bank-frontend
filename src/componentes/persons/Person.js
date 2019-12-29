import React from 'react';
import { Link } from 'react-router-dom'

function Person({person}) {
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
                <button className="btn btn-danger">Eliminar</button>
            </td>
        </tr>
    );
}

export default Person;