
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/order-review' element={<OrderReview/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/inventory' element={<Inventory/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
