import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const EditPerson = ({match, history}) => {

    //creacion de los refs para la edicion
    const nameRef = useRef('')
    const surnameRef = useRef('')
    const dniRef = useRef('')
    const dateRef = useRef('')
    const { id } = match.params
    const [ person, savePerson ] = useState({})

    const getOnePerson = async () => {
        const response = await axios.get(`http://localhost:4000/api/persons/${id}`)
        console.log(response.data.data);
        return response.data.data;
    }
    useEffect(() => {
        let getPerson = getOnePerson();
        savePerson(getPerson)
    }, [id])
    console.log(person);
    const submitEditPerson = e => {
        e.preventDefault()
        //validar formulario

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
                        ref={dateRef}/>
                </div>
                <input type="submit" value="Agregar persona" className="btn btn-success"/>
            </form>
        </div>
    );
}

export default EditPerson;