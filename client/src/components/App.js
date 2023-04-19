// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LandingPage from '../pages/LandingPage'
import Navbar from './Navbar';
import ProductList from '../components/ProductList'
import { Routes, Route } from "react-router-dom";
import ProductPage from '../pages/ProductPage';
import Checkout  from '../pages/Checkout'
import Slideshow from '../components/Slideshow';

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Routes>
      
    <Route path='/' element={<LandingPage/>}/>
    <Route path="/product-list" element={<ProductList/>} />
    <Route path="/product-page" element={<ProductPage/>} />
    <Route path="/checkout" element={<Checkout/>} />

      
    </Routes>
    <Slideshow/>
    </div>
  
  

  );
}

export default App; 
