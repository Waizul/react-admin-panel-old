import { BrowserRouter, Route, Routes } from "react-router-dom";
import Leftbar from "./components/leftbar/Leftbar";
import Topbar from "./components/topbar/Topbar";
import Home from './pages/home/Home'
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";
function App() {
  return (
    <BrowserRouter>
   <div>
<Topbar/>
<div className='container'>
  <Leftbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/users' element={<UserList/>} />
    <Route path='/user/:userId' element={<User/>} />
    <Route path='/newUser' element={<NewUser/>} />
    <Route path='/products' element={<ProductList/>} />
     <Route path='/product/:productId' element={<Product/>} />
    <Route path='/newProduct' element={<NewProduct/>} />
  </Routes>
</div>
   </div>
   </BrowserRouter>
  );
}

export default App;
