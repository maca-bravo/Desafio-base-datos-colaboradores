import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const Formulario = ({lstColaboradores, setLstColaboradores, setLstFiltrada}) => {
    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const agregarColaborador = (e) => {

        e.preventDefaul();
        
        setLstColaboradores([...lstColaboradores,{ nombre: nombre, correo: email }]);
        setLstFiltrada([...lstColaboradores,{ nombre: nombre, correo: email }]);
    }


  return (
    <div className='p-2'>
        <form onSubmit={agregarColaborador}>
            <div>
                <input type="text" id='nombre' name='nombre' placeholder='ingresa el nombre del colaborador'
                onChange={ (e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <input type="email" id='email' name='email' placeholder='ingresa el correo del colaborador'
                onChange={ (e) => setEmail(e.target.value)}
                />
            </div>
            <button>
                Agregar Coladorador

            </button>
        </form>
        </div>
  )
}

export default Formulario