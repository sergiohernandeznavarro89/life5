import './App.css';

import 'primeicons/primeicons.css'; // Importa los iconos de PrimeIcons
import 'primereact/resources/themes/saga-blue/theme.css'; // Importa el tema de PrimeReact
import 'primereact/resources/primereact.min.css'; // Importa los estilos generales de PrimeReact
import 'primeflex/primeflex.css'; // Importa los estilos de PrimeFlex

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Telesuscription from './pages/telesuscription';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Telesuscription />}/>
      </Routes>
    </Router>
  );
}

export default App;
