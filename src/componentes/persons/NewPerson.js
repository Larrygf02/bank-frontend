import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


const NewPerson = ({history}) =>  {
    // state
    const [ name, saveName ] = useState('')
    const [ surname, saveSurname ] = useState('')
    const [ dni, saveDNI ] = useState('')
    const [ date, saveDate] = useState('')

    // Agregar una nueva persona
    const submitNewPerson = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/persons', {
                name,
                surname,
                dni,
                birth_date: date
            })
            console.log(response);
            if (response.status === 200) {
                console.log('Creado correctamente');
                history.push('/personas')
            }
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="row">
            <div className="col-12 mb-4">
                <Link to={'/personas'} className="btn btn-secondary">
                    <i className="fas fa-arrow-circle-left"></i> {''}
                    Volver al listado
                </Link>
            </div>
            <div className="col-12">
                <h2>
                    <i className="fas fa-user"></i> {''}
                    Nueva Persona
                </h2>
                <div className="row justify content-center">
                    <div className="col-md-8 mt-5">
                        <form onSubmit={submitNewPerson}>
                            <div className="form-group">
                                <label>Nombre: </label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    value={name}
                                    onChange={ e => saveName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Apellido: </label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellido"
                                    value={surname}
                                    onChange={ e => saveSurname(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>DNI: </label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="DNI"
                                    value={dni}
                                    onChange={ e => saveDNI(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Fecha Nacimiento: </label>
                                <input 
                                    type="date"
                                    className="form-control"
                                    placeholder="Fecha Nacimiento"
                                    onChange={ e => saveDate(e.target.value)}/>
                            </div>
                            <input type="submit" value="Agregar persona" className="btn btn-success"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPerson;