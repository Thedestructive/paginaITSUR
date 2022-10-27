import './App.css';
import { News } from './components/news/News';
import { Menu } from './components/Menu/Menu';
import { ComboEstudios } from './components/Combo/Combo';
import { PlanEstudiElectronica, PlanEstudioAmbiental, PlanEstudioAutomotriz, PlanEstudioGastro, PlanEstudioGestion, PlanEstudioIndustrial, PlanEstudioSistemas } from './components/PlanEstudio/PlanEstudio'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='app'>

      <BrowserRouter>
        <Menu />
        <section className='section-space'>
          <Routes>
            <Route path='/' element={<News />} />
            <Route path='/Noticias' element={<News />} />
            <Route path='/ComboEstudios' element={<ComboEstudios />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
