
import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from './datos/BaseColaboradores.js';
import Formulario from './components/Formulario';
import ListaColaboradores from './components/ListaColaboradores';
import Header from './components/Header.jsx';

function App() {
  const [lstColaboradores, setLstColaboradores] = useState (BaseColaboradores);
  const [lstFiltrada, setLstFiltrada] = useState (BaseColaboradores);



  return (
    <div className="App">
      <Header
      lstColaboradores={lstColaboradores}
      setLstFiltrada={setLstFiltrada}
      ></Header>
      <Formulario
        lstColaboradores={lstColaboradores}
        setLstColaboradores={setLstColaboradores}
        setLstFiltrada={setLstFiltrada}>
      </Formulario>
      <ListaColaboradores 
        lstColaboradores={lstFiltrada}>

      </ListaColaboradores>
    </div>
  );
}

export default App;
