import logo from './logo.svg';
import './App.css';
import { News } from './components/news/News';
import { Menu } from './components/Menu/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>

      <BrowserRouter>
        <nav className='nav-space'>
          <Menu />
        </nav>
        <section className='section-space'>
          <Routes>
            <Route path='/' element={<News />} />
            <Route path='/Noticias' element={<News />} />
            <Route path='/PlanEstudio' element={<h1>Plan estudio</h1>} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
