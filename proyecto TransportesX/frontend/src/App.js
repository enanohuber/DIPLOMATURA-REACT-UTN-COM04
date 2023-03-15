/////esto es lo que me permite navegar las paginas de navegacion (linea 8 en adelante) 
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
///////elementos estaticos
import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';
/////parte de navegacion
import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <div className="App">      
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='nosotros' element={<NosotrosPage />}/>
          <Route path='novedades' element={<NovedadesPage />}/>
          <Route path='contacto' element={<ContactoPage />}/>
        </Routes>      
      </BrowserRouter>      
      <Footer/>
    </div>
  );
}

export default App;
