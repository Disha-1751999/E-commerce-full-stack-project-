import React from 'react'
import NavBar from './components/layout/NavBar'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductByCategory from './pages/ProductByCategory';
import ProductByBrand from './pages/ProductByBrand';
import ProductByKeyword from './pages/ProductByKeyword';
import ProductDetails from './pages/ProductDetails';
import AboutPage from './pages/AboutPage';
import RefundPage from './pages/RefundPage';
import TermsPage from './pages/TermsPage';
import HowToBuyPage from './pages/HowToBuyPage';
import ContactPage from './pages/ContactPage';
import ComplainPage from './pages/ComplainPage';
import PrivacyPage from './pages/PrivacyPage';
import LoginPage from './pages/LoginPage';
import OtpPage from './pages/OtpPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import WishPage from './pages/WishPage';
import OrderPage from './pages/OrderPage';
import InvoicePage from './pages/InvoicePage';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/by-category/:id' element={<ProductByCategory/>}/>
      <Route path='/by-brand/:id' element={<ProductByBrand/>}/>
      <Route path='/by-keyword/:keyword' element={<ProductByKeyword/>}/>
      <Route path='/product-details/:id' element={<ProductDetails/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/refund-policy' element={<RefundPage/>}/>
      <Route path='/terms' element={<TermsPage/>}/>
      <Route path='/privacy' element={<PrivacyPage/>}/>
      <Route path='/how-to-buy' element={<HowToBuyPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/complain' element={<ComplainPage/>}/>

      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/otp' element={<OtpPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>

      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/wish' element={<WishPage/>}/>      
      <Route path='/order' element={<OrderPage/>}/>
      <Route path='/invoice/:id' element={<InvoicePage/>}/>
      
    </Routes>
    
    </BrowserRouter>
     
    
  )
}

export default App
