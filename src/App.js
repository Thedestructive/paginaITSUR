import './App.css';
import { Inicio } from './components/Inicio/Inicio'
import { News } from './components/news/News';
import { Menu } from './components/Menu/Menu';
import { ComboEstudios } from './components/Combo/Combo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Titulacion } from './components/Estudiantes/Titulacion';
import { Tutorias } from './components/Estudiantes/Tutorias';
import { CentroComputo } from './components/Estudiantes/CentroComputo';
import { SeguroEscolar } from './components/Estudiantes/SeguroEscolar';
import { ApoyosEstudiantiles } from './components/Estudiantes/ApoyosEstudiantiles';
import { TramitesSerevicios } from './components/Estudiantes/TramitesSerevicios';
import { Convocatorias } from './components/Estudiantes/Convocatorias';
import { Directorio } from './components/AcercaITSUR/Directorio';
import { Filosofia } from './components/AcercaITSUR/Filosofia';

window.addEventListener('scroll', function () {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;
  let element = document.getElementById('fab');
  screenSize > element.scrollTop
    ?
    element.classList.add('fab-scroll-visible')
    :
    element.classList.remove('fab-scroll-visible');
  for (const item of elements) {
    let element = item;

    if (element.getBoundingClientRect().top < screenSize - 200) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  }

});

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Menu />
        <section className='section-space'>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Noticias' element={<News />} />
            <Route path='/ComboEstudios' element={<ComboEstudios />} />
            <Route path='/titulacion' element={<Titulacion />} />
            <Route path='/tutorias' element={<Tutorias />} />
            <Route path='/centroComputo' element={<CentroComputo />} />
            <Route path='/seguroEscolar' element={<SeguroEscolar />} />
            <Route path='/apoyosEstudiantiles' element={<ApoyosEstudiantiles />} />
            <Route path='/tramitesServicios' element={<TramitesSerevicios />} />
            <Route path='/convocatorias' element={<Convocatorias />} />
            <Route path='/directorio' element={<Directorio />} />
            <Route path='/filosofia' element={<Filosofia/>}/>
          </Routes>
        </section>
      </BrowserRouter>
      <div className='fab-scroll' id='fab' onClick={() => { window.scrollTo(0, 0) }}>
        <div className='flecha-arriba'></div>
      </div>

    </div>
  );
}

export default App;
