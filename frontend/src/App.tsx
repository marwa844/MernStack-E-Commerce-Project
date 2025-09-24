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
import ProductsCategory from "./pages/ProductsCategory";
import Product from "./pages/product";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import BottomBar from "./components/Bottombar";
import MainCategory from "./pages/categories";
import FooterSec from "./components/footer";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    if (document.readyState === "complete") {
      setLoading(false);
      return;
    }
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, [loading]);

  if (loading) {
    return (  
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="logo.png" style={{width:"50px"}}/>
    </Box>
  );
  }

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/maincategories" element={<MainCategory />}></Route>
            <Route path="/shop" element={<Shop />} />
            <Route path="/category/:id" element={<ProductsCategory />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginApp />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/thankyou" element={<Thankyou />} />
              <Route path="/order" element={<Order />} />
            </Route>
          </Routes>
          <FooterSec></FooterSec>
          <BottomBar></BottomBar>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

  
export default App;
