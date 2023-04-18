// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LandingPage from '../pages/LandingPage'
import Navbar from './Navbar';
import ProductList from '../components/ProductList'
import ProductPage from "../pages/ProductPage"
import { Routes, Route } from "react-router-dom";
import ProductsInfoPage from './ProductsInfo';

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path="/products" element={<ProductPage />} />
      <Route  path='/products/:id' element={< ProductsInfoPage/>}/>
    </Routes>
    </div>
  
  

  );
}

export default App; 
