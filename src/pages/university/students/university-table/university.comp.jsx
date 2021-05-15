import React, { useState } from 'react';
import CoursesTable from '../courses-table/courses-table.comp';
import StudentsRow from '../students-row/students-row.comp';
import StudentsTable from '../students-table/students-table.comp';
import StudentsTable2 from '../students-table/students-table2.comp';

import './university.style.css'

const UniversityTable = () => {
    const [nombreAsignatura, setNombreAsignatura] = useState('');
    const [nombreEstudiante, setNombreEstudiante] = useState('');
    const [notaEstudiante, setNotaEstudiante] = useState(0);
    const [generoEstudinate, setGeneroEstudiante] = useState('');
    const [nombreDeporte, setNombreDeporte] = useState('');

    const agregarEstudiante = (event) =>{
        event.preventDefault();
        console.log('nombreAsignatura: ' + nombreAsignatura);
        console.log('nombreEstudiante: ' + nombreEstudiante);
        console.log('precio: ' + notaEstudiante);
        console.log('genero: ' + generoEstudinate);
    }

    const agregarDeporte = (event) =>{
        event.preventDefault();
        console.log('nombreDeporte: ' + nombreDeporte);
        console.log('nombreEstudiante: ' + nombreEstudiante);
        console.log('genero: ' + generoEstudinate);
    }

    //const[university, setUniversity] = useState (CoursesTable); 

    return (
    
    <div className="university-table sombra">
    
        <header>
            <h1 className="titulo">universidad UM</h1>
        </header>

        <CoursesTable courseName="Bases de datos"/>
        <StudentsTable tipeDate={{
            name:"Nombre",
            grade:"Nota",
            gender:"Genero",
        }}/>
        <StudentsRow student={{
            name:"James Castillo",
            grade:3.7,
            gender:"Male",
        }}/>
         <StudentsRow student={{
            name:"Camilo Gutierrez",
            grade:3.2,
            gender:"Male",
        }}/>
         <StudentsRow student={{
            name:"Camila Cifuentes",
            grade:3.4,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Daniela Castro",
            grade:4.2,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Alberto Noreña",
            grade:1.5,
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Carolina Rios",
            grade:3.4,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Valentina Fuelpaz",
            grade:2.5,
            gender:"Female",
        }}/>
        <CoursesTable courseName="Microcontroladores"/>
        <StudentsTable tipeDate={{
            name:"Name",
            grade:"Grade",
            gender:"Gender",
        }}/>
        <StudentsRow student={{
            name:"Sergio Gomez",
            grade:4.5,
            gender:"Male",
        }}/>
         <StudentsRow student={{
            name:"Maricel Rodriguez",
            grade:2.6,
            gender:"Female",
        }}/>
         <StudentsRow student={{
            name:"Sebastian Salazar",
            grade:2.7,
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Tomas Martinez",
            grade:4.4,
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Julian Piedraita",
            grade:1.2,
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Luisa Pelaez",
            grade:3.9,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Laura Ocampo",
            grade:2.6,
            gender:"Female",
        }}/>
        
        <CoursesTable courseName="Matematicas especiales"/>
        <StudentsTable tipeDate={{
            name:"Name",
            grade:"Grade",
            gender:"Gender",
        }}/>
        <StudentsRow student={{
            name:"Alejandro Mejia",
            grade:3.3,
            gender:"Male",
        }}/>
         <StudentsRow student={{
            name:"Claudia Hernandes",
            grade:1.6,
            gender:"Female",
        }}/>
         <StudentsRow student={{
            name:"Estefania Guapacha",
            grade:3.1,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Tatiana Solarte",
            grade:3.8,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Alejandra Uribe",
            grade:2.9,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Oscar Gonzales",
            grade:3.2,
            gender:"Male",
        }}/>

        <CoursesTable courseName="Deportes de conjunto"/>
        <StudentsTable2 tipeDate={{
            name:"Name",
            sport:"Sport",
            gender:"Gender",
        }}/>
        <StudentsRow student={{
            name:"Felipe Colorado",
            sport:"Baloncesto",
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Andres Amaya",
            sport:"Futbol",
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Fernanda Garcia",
            sport:"Volleybol",
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Ricardo Buitrago",
            sport:"Baloncesto",
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Maria Gonzales",
            sport:"Volleybol",
            gender:"Female",
        }}/> 

<main className="formulario sombra">
            <section>
                <h2>Agregar estudiante </h2>
                <form className="formulario">
                    <fieldset>
                        <legend>Llena todos los campos</legend>
                        <div className="contenedor-campos">
                        <div className="campo">
                        <label> Asignatura </label>
                        </div>
                        <div className="campo">
                            <select value={nombreAsignatura}
                            onChange={(event)=>{
                                console.log(event.target.value);
                                setNombreAsignatura(event.target.value);
                            }}
                            className="input-text">
                           <option value="Bases de datos">Bases de datos</option>
                           <option value="Microcontroladores">Microcontroladores</option>
                           <option value="Matematicas especiales">Matematicas especiales</option>
                           </select></div>     

                        <div className="campo">
                            <label > Nombre Estudiante </label>
                            <input value={nombreEstudiante}
                            onChange={(event)=>{
                                setNombreEstudiante(event.target.value);
                            }}
                            className="input-text" type="text" placeholder="Nombre Estudiante"/>
                        </div>
                
                        <div className="campo">
                             <label> Nota </label>
                            <input value={notaEstudiante}
                            onChange={(event)=>{
                                setNotaEstudiante(event.target.value);
                            }}
                            className="input-text" type="number" placeholder="Nota"/>
                        </div>

                        <div className="campo">
                        <label > Genero </label>
                            <select value={generoEstudinate}
                            onChange={(event)=>{
                                console.log(event.target.value);
                                setGeneroEstudiante(event.target.value);
                            }}
                            className="input-text">
                           <option value="Male">Male</option>
                           <option value="Famale">Female</option>
                           </select></div>
                
                    </div>

            <div className="alinear-derecha flex">
                <input onClick={agregarEstudiante}
                 className="boton w-100" type="submit" value="Crear"/>
            </div>

                    </fieldset>

                </form>
            </section>
        </main>

        <main className="formulario2 sombra">
            <section>
                <h2>Agregar Deporte </h2>
                <form className="formulario">
                    <fieldset>
                        <legend>Llena todos los campos</legend>
                        <div className="contenedor-campos">
                        <div className="campo">
                        <label> Deporte </label>
                        </div>
                        <div className="campo">
                            <select value={nombreDeporte}
                            onChange={(event)=>{
                                console.log(event.target.value);
                                setNombreDeporte(event.target.value);
                            }}
                            className="input-text">
                           <option value="Baloncesto">Baloncesto</option>
                           <option value="Futbol">Futbol</option>
                           <option value="Volleybol">Volleybol</option>
                           </select></div>     

                        <div className="campo">
                            <label > Nombre Estudiante </label>
                            <input value={nombreEstudiante}
                            onChange={(event)=>{
                                setNombreEstudiante(event.target.value);
                            }}
                            className="input-text" type="text" placeholder="Nombre Estudiante"/>
                        </div>

                        <div className="campo">
                        <label > Genero </label>
                            <select value={generoEstudinate}
                            onChange={(event)=>{
                                console.log(event.target.value);
                                setGeneroEstudiante(event.target.value);
                            }}
                            className="input-text">
                           <option value="Male">Male</option>
                           <option value="Famale">Female</option>
                           </select></div>
                
                    </div>

            <div className="alinear-derecha flex">
                <input onClick={agregarDeporte}
                 className="boton w-100" type="submit" value="Crear"/>
            </div>

                    </fieldset>

                </form>
            </section>
        </main>
     
    </div>
    )
}

export default UniversityTable;