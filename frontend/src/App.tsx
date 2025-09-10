import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Navbar from "./components/topBar";
import ResponsiveAppBar from "./components/topBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
