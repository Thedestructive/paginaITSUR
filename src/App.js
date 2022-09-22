import logo from './logo.svg';
import './App.css';
import { News } from './components/news/News';
import { Menu } from './components/Menu/Menu';

function App() {
  return (
    <div className='app'>
      <Menu/>
      <News/>
    </div>
  );
}

export default App;
