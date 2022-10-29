import './App.css';
import { Inicio } from './components/Inicio/Inicio'
import { News } from './components/news/News';
import { Menu } from './components/Menu/Menu';
import { ComboEstudios } from './components/Combo/Combo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


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
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
