import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'

class NewPerson extends Component {
    render() {
        // state
        const [ name, saveName ] = useState('')
        const [ surname, saveSurname ] = useState('')
        const [ dni, saveDNI ] = useState('')
        const [ date, saveDate] = useState('')

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
                            <form>
                                <div className="form-group">
                                    <label>Nombre: </label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre"/>
                                </div>
                                <div className="form-group">
                                    <label>Apellido: </label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Apellido"/>
                                </div>
                                <div className="form-group">
                                    <label>DNI: </label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="DNI"/>
                                </div>
                                <div className="form-group">
                                    <label>Fecha Nacimiento: </label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Fecha Nacimiento"/>
                                </div>
                                <input type="submit" value="Agregar persona" className="btn btn-success"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewPerson;