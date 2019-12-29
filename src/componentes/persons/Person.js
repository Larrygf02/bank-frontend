import React from 'react';
import { Link } from 'react-router-dom'

function Person({person}) {
    return (
        <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.surname}</td>
            <td>{person.dni}</td>
            <td>{person.birth_date}</td>
            <td>
                <Link>Editar</Link>
            </td>
        </tr>
    );
}

export default Person;