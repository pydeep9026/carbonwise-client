import logo from './logo.svg';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/store/home/home';
import Itemdetails from './components/store/itemdetails/itemdetails';
import Ecofindlist from './components/store/ecofindlist/ecofindlist';
import Ecokart from './components/store/ecokart/ecokart';
import Checkout from './components/store/checkout/checkout';
import Profile from './components/store/profile/profile';
import Orders from './components/store/orders/orders';
import Settings from './components/store/settings/settings';
import Dashboard from './components/admin/dashboard/dashboard';
import Allproducts from './components/admin/allproducts/allproducts';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';







function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      {/*store routes*/}
      <Route path='/' element={<Home/>} />
      <Route path='/itemdetails' element={<Itemdetails/>}/>
      <Route path='/ecofindlist' element={<Ecofindlist/>}/>
      <Route path='/ecokart' element={<Ecokart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/settings' element={<Settings/>}/>
      {/*store routes*/}

      {/*admin routes*/}
      <Route path='/admin' element={<Dashboard/>} />
      <Route path='/admin/orders' element={<Orders/>} />
      <Route path='/admin/products' element={<Allproducts/>} />
      {/*admin routes*/}

    </Routes>
    <Footer/>
    </Router>
    </>
  );
}
export default App;



