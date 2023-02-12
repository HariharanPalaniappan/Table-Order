import './App.css';
import LoginScreen from './screens/login/login';
import SignUp from './screens/signUp/signUp';
import ProductList from './screens/productList/productList';
import OrderList from './screens/orderList/orderList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='header-menu'>Header</div>
        <div className='main-container'>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/productList" element={<ProductList />} />
              <Route path="/orderList" element={<OrderList />} />
          </Routes>
        </div>
        <div className='footer-menu'>Footer</div>
      </div>
  </BrowserRouter>
  );
}

export default App;
