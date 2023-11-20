/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import ListaDeTareas from './components/ListaDeTareas/ListaDeTareas';
// import { CiSquarePlus } from "react-icons/ci";


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <div className='text-shadow-drop-bl title' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1>Todo list</h1>
          {/* <button><CiSquarePlus/></button> */}
        </div>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;

