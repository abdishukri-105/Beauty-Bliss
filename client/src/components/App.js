// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LandingPage from '../pages/LandingPage'
import Navbar from './Navbar';
import ProductList from '../components/ProductList'
import ProductPage from "../pages/ProductPage"
import { Routes, Route } from "react-router-dom";
import ProductsInfoPage from './ProductsInfo';
import ShoppingCart  from '../pages/ShoppingCart'
import Slideshow from '../components/Slideshow';
import BillingInfo from '../pages/BillingInfo';
import Receipt from '../pages/Receipt';
import Orders from '../pages/Orders';
import Payment from './Payment';

function App() {

  
  return (
    <div className='App'>
    <Navbar/>
    <Routes>

      <Route path='/' element={<LandingPage/>}/>
      <Route path="/products" element={<ProductPage />} />
      <Route  path='/product/:id' element={< ProductsInfoPage/>}/>
      <Route path="/order" element={<Orders/>} />
      <Route path="/cart" element={<ShoppingCart/>} />
      <Route path="/billinginfo" element={<BillingInfo/>} />
      <Route path="/receipt" element={<Receipt/>} /> 
      <Route path="/payment" element={<Payment/>} /> 
    {/* <Route path='/' element={<LandingPage/>}/>
    {/* <Route path="/product-list" element={<ProductList/>} />
    <Route path="/product-page" element={<ProductPage/>} /> */}
  

      

    </Routes>
    <Slideshow/>
    </div>
  

  );
}

export default App; 
