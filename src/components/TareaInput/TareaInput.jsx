import React, { useState } from 'react';
import './TareaInput.css';
import { v4 as uuidv4 } from 'uuid';
import { CiSquarePlus } from "react-icons/ci";


function TareaInput(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva);

    // Limpiar el input después de enviar la tarea
    setInput('');
  }

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        value={input}
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        <CiSquarePlus/>
      </button>
      
    </form>
  );
}

export default TareaInput;
