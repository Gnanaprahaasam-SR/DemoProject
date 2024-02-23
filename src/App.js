
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavHeader from './pages/NavBar';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavHeader />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
