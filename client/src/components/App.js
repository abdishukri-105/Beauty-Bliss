import '../App.css'
import LandingPage from '../pages/LandingPage'
import Navbar from './Navbar';
import ProductPage from "../pages/ProductPage"
import { Routes, Route } from "react-router-dom";
import ProductsInfoPage from './ProductsInfo';
import ShoppingCart  from '../pages/ShoppingCart'
import Slideshow from '../components/Slideshow';
import BillingInfo from '../pages/BillingInfo';
import Receipt from '../pages/Receipt';
import Orders from '../pages/Orders';
import Payment from './Payment';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup'
import 'flowbite/dist/flowbite.min.css';
import 'flowbite/dist/flowbite.min.js';

// for the admin panel
import AdminTable from '../admin/AdminTable';

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
      <Route path="/login" element={<Login/>} /> 
      <Route path="/signup" element={<Signup/>} /> 

    {/* <Route path='/' element={<LandingPage/>}/>
    {/* <Route path="/product-list" element={<ProductList/>} />
    <Route path="/product-page" element={<ProductPage/>} /> */}


 {/* this is for the admin panel */}
    <Route path="/admin-table" element={< AdminTable/>} /> 



    </Routes>
    <Slideshow/>
    <Footer/>
    </div>
     

  );
}

export default App; 
