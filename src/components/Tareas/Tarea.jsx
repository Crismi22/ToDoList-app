import React from 'react';
import './Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className="tarea-checkbox">
        <input
          type="checkbox"
          id={`tarea-${id}`}
          checked={completada}
          onChange={() => completarTarea(id)}
        />
        <div className="tarea-tick-container">
          <span className="tarea-tick">✔</span>
        </div>
      </div>
      <div className='tarea-texto' onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos' onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );
}

export default Tarea;
