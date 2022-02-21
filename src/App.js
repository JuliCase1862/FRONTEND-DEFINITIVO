import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';


import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import ContactoPage from './pages/ContactoPage';
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Galeria from './pages/Galeria';
import NovedadesPage from './pages/NovedadesPage';



function App() {
return (
<Router>
<Header/>
<Nav/>
<Routes>
<Route path="/" exact element={<Home />} />
<Route path="/nosotros" exact element={<Nosotros />} />
<Route path="/contacto" exact element={<ContactoPage />} />
<Route path="/galeria" exact element={<Galeria />} />
<Route path="/novedades" exact element={<NovedadesPage/>} />
</Routes>
<Footer></Footer>
</Router>

);
}


export default App;
