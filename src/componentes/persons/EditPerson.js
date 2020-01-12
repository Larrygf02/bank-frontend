import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const EditPerson = ({match, history, person}) => {

    //creacion de los refs para la edicion
    const nameRef = useRef('')
    const surnameRef = useRef('')
    const dniRef = useRef('')
    const dateRef = useRef('')
    const formatDate = date => {
        let sd = date.split("-")
        console.log( `${sd[2]}/${sd[1]}/${sd[0]}`);
        return `${sd[2]}/${sd[1]}/${sd[0]}`
    }
    const submitEditPerson = e => {
        e.preventDefault()
        //validar formulario
        const name = nameRef.current.value
        const surname = surnameRef.current.value
        const dni = dniRef.current.value
        const date = dateRef.current.value
        if (name === '' || surname === '' || dni === '' || date === '') {
            alert('Completar datos')
            return;
        }
        const newPerson = {
            name,
            surname,
            dni,
            date
        }
        console.log(newPerson)
    }
    if (!person) return 'Cargando ...'
    return (
        <div>
            <h1>Editando persona</h1>
            <form onSubmit={submitEditPerson}>
                <div className="form-group">
                    <label>Nombre: </label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        defaultValue={person.name}
                        ref={nameRef}/>
                </div>
                <div className="form-group">
                    <label>Apellido: </label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        defaultValue={person.surname}
                        ref={surnameRef}/>
                </div>
                <div className="form-group">
                    <label>DNI: </label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="DNI"
                        defaultValue={person.dni}
                        ref={dniRef}/>
                </div>
                <div className="form-group">
                    <label>Fecha Nacimiento: </label>
                    <input 
                        type="date"
                        className="form-control"
                        placeholder="Fecha Nacimiento"
                        defaultValue={formatDate(person.birth_date)}
                        ref={dateRef}/>
                </div>
                <input type="submit" value="Agregar persona" className="btn btn-success"/>
            </form>
        </div>
    );
}

export default EditPerson;