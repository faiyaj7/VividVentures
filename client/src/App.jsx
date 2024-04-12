import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Loader from "./components/Loader.jsx";

const Home = React.lazy(() => import("./components/pages/Home"));
const Menu = React.lazy(() => import("./components/pages/Menu.jsx"));
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
const Navbar = React.lazy(() => import("./components/Navbar"));
const Admin = React.lazy(() => import("./components/Admin"));
const Footer = React.lazy(() => import("./components/Footer"));
const Success = React.lazy(() => import("./components/Success.jsx"));
const Cancel = React.lazy(() => import("./components/Cancel.jsx"));


function App() {
  const location = useLocation();

  return (
    <>

        <Suspense fallback={<Loader />}>
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
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </Suspense>

        <Footer />
      
    </>
    
  );
}

export default App;
