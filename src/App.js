import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/browse" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
