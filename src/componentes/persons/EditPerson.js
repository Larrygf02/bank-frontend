import React, { useRef } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

const EditPerson = ({ history, person, saveRefresh}) => {
    //creacion de los refs para la edicion
    const nameRef = useRef('')
    const surnameRef = useRef('')
    const dniRef = useRef('')
    const dateRef = useRef('')

    const submitEditPerson = async e => {
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
        const response = await axios.patch(`http://localhost:4000/api/persons/${person.id}`, newPerson)
        if (response.status === 200) {
            console.log('Editado correctamente');
            saveRefresh(true)
        }
        history.push('/personas')

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
                        defaultValue={person.birth_date}
                        ref={dateRef}/>
                </div>
                <input type="submit" value="Agregar persona" className="btn btn-success"/>
            </form>
        </div>
    );
}

export default withRouter(EditPerson);