
import { Routes , Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Categories from './components/Categories'
import Products from './pages/Products'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  
  return (
    <>
     <NavBar/>
   
 
     <Routes>
      
      <Route path="/" element={<Home/>}> </Route>
     <Route path="/products" element={<Products/>}> </Route>
    <Route path="/cart" element={<Cart/>}> </Route>
    <Route path="/checkout" element={<CheckOut/>}> </Route>
<Route
  path="/order-success/:id"
  element={<OrderSuccess />}
/>
     </Routes>

    </>
  )
}

export default App
