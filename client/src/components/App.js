// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LandingPage from '../pages/LandingPage'
import Navbar from './Navbar';
import ProductList from '../components/ProductList'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Routes>
      
    <Route path='/' element={<LandingPage/>}/>
    <Route path="/product-list" element={<ProductList/>} />
      
    </Routes>
    </div>
  
  

  );
}

export default App; 
