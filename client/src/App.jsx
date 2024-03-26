import "./App.css";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "./components/pages/Home";
// import Menu from "./components/pages/Menu";
// import About from "./components/pages/About";
// import SingleProduct from "./components/pages/SingleProduct";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import HomeNavbar from "./components/HomeNavbar";
// import Admin from "./components/Admin";
// import Cart from "./components/pages/Cart";
// import Contact from "./components/pages/Contact";
// import Login from "./components/pages/Login";
// import Register from "./components/pages/Register";
// import Profile from "./components/pages/Profile";
const Home = React.lazy(() => import("./components/pages/Home"));
const Menu = React.lazy(() => import("./components/pages/Menu"));
const About = React.lazy(() => import("./components/pages/About"));
const SingleProduct = React.lazy(() =>
  import("./components/pages/SingleProduct")
);
const Cart = React.lazy(() => import("./components/pages/Cart"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Profile = React.lazy(() => import("./components/pages/Profile"));

const HomeNavbar = React.lazy(() => import("./components/HomeNavbar"));
const Admin = React.lazy(() => import("./components/Admin"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Menu />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
    // <h1>heloo</h1>
  );
}

export default App;
