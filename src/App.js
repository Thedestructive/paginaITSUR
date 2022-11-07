import './App.css';
import { Inicio } from './components/Inicio/Inicio'
import { News } from './components/news/News';
import { Menu } from './components/Menu/Menu';
import { ComboEstudios } from './components/Combo/Combo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Titulacion } from './components/Estudiantes/Titulacion';
import { Tutorias } from './components/Estudiantes/Tutorias';
import { CentroComputo } from './components/Estudiantes/CentroComputo';

window.addEventListener('scroll', function()  {
  let screenSize = window.innerHeight;
  let element = document.getElementById('fab');
      if(screenSize > element.scrollTop){
        element.classList.add('fab-scroll-visible')
      }
    
});

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Menu />
        <section className='section-space'>
          <Routes>
            <Route path='/' element={ <Inicio/> } />
            <Route path='/Noticias' element={<News />} />
            <Route path='/ComboEstudios' element={<ComboEstudios />} />
            <Route path='/titulacion' element={<Titulacion />} />
            <Route path='/tutorias' element={<Tutorias />} />
            <Route path='/centroComputo' element={<CentroComputo />} />
          </Routes>
        </section>
      </BrowserRouter>
      <div className='fab-scroll' id='fab' onClick={()=>{window.scrollTo(0,0)}}>
        <div className='flecha-arriba'></div>
      </div>
    </div>
  );
}

export default App;
