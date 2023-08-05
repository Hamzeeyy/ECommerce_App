import "./App.css";
import Navbar from "./component/navbar";
import Home from "./component/home";
import { Routes, Route } from "react-router-dom";
import Products from "./component/products";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Register from "./component/Register";
import Billing from "./component/Billing";
import Reset from "./component/Reset";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/BIlling" element={<Billing />} />
        <Route exact path="/Reset" element={<Reset />} />
      </Routes>
    </>
  );
}

export default App;
