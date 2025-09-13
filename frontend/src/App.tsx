import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import ResponsiveAppBar from "./components/topBar";
import Register from "./pages/register";
import  AuthProvider  from "./context/Auth/AuthProvider";
import LoginApp from "./pages/login";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ResponsiveAppBar></ResponsiveAppBar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/login" element={<LoginApp></LoginApp>}></Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
