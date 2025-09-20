import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import ResponsiveAppBar from "./components/topBar";
import Register from "./pages/register";
import AuthProvider from "./context/Auth/AuthProvider";
import LoginApp from "./pages/login";
import Cart from "./pages/cart";
import ProtectedRoute from "./components/protectedRoute";
import CartProvider from "./context/Cart/cartProvider";
import Checkout from "./pages/checkout";
import Thankyou from "./pages/thankyou";
import Order from "./pages/order";


function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
        <BrowserRouter>
          <ResponsiveAppBar></ResponsiveAppBar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/login" element={<LoginApp></LoginApp>}></Route>
            <Route element={<ProtectedRoute></ProtectedRoute>}>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="/checkout" element={<Checkout></Checkout>}></Route>
              <Route path="/thankyou" element={<Thankyou></Thankyou>}></Route>
              <Route path="/order" element={<Order></Order>}></Route>

            </Route>
          </Routes>
        </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
