import React, { useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import { FaQuestion } from "react-icons/fa";
import { FaMicroblog } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import MenuPopover from "./MenuPopover";
import Login from "./pages/Login";
import Search from "./Search";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";
const NavLink = ({
  title,
  singleItem = "",
  link,
  handleToggleMenu = "",
  icon,
  className,
}) => {
  const MotionLink = motion(Link);

  const handleScroll = (event) => {
    // for mobile
    if (handleToggleMenu) handleToggleMenu();
    let target = event.target.getAttribute("href");
    // Removing the / before the link to make an id

    target = target.slice(1);
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MotionLink
      to={link}
      variants={singleItem}
      onClick={handleScroll}
      className="font-medium text-sm group relative linkBorder link"
    >
      <div className="flexContainer gap-4">
        {icon}
        <h1 className={`${className}`}>{title}</h1>
      </div>
    </MotionLink>
  );
};

const HomeNavbar = () => {
  const { user, isAuthenticated } = useAuth0();
  const totalQuantities = useSelector(
    (state) => state.productSlice.totalQuantities
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      // making the scroll on when menu is closed
      document.querySelector("html").style.overflow = "visible";
    } else {
      setMenuOpen(true);
      // making the scroll off when menu is opened
      document.querySelector("html").style.overflow = "hidden";
    }
  };
  const container = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      x: 0,
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
    exit: { x: "100vw" },
  };
  const singleItem = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };
  return (
    <div className="flexContainer flex-col px-4 gap-7">
      {/* First Navbar */}
      <div className=" flexContainer mt-5 w-full">
        {/* Logo */}
        <Link to="/" className="w-[20%] lg:w-[5%]">
          <Logo />
        </Link>
        {/* Search Button */}
        <div className="hidden lg:flexContainer !justify-around w-[30%] relative ">
          <Search />
        </div>
        {/* Cart , Signin button  */}
        <div className="hidden lg:flexContainer gap-6">
          <Link to="/cart" className="flexContainer gap-2">
            <IoCartOutline size={30} />
            <span className="text-white rounded-full bg-orange-600 w-1/2 text-center  p-[2px] text-xs">
              {totalQuantities}
            </span>
          </Link>
          {isAuthenticated ? <MenuPopover user={user} /> : <Login />}
        </div>
        {/* Menu button */}
        <button
          onClick={handleToggleMenu}
          className="visible lg:hidden flex items-center justify-center flex-col gap-1 z-30"
        >
          <span
            className={`bg-black dark:bg-light  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              menuOpen ? `rotate-45 translate-y-[0.70rem]` : `-translate-y-0.5`
            } `}
          ></span>
          <span
            className={` my-0.5 bg-black dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              menuOpen ? `opacity-0` : `opacity-100`
            } `}
          ></span>
          <span
            className={`bg-black dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              menuOpen ? `-rotate-45 -translate-y-1` : `translate-y-0.5`
            } `}
          ></span>
        </button>
      </div>
      {/* Second Navbar */}
      <div className="hidden lg:flexContainer w-full">
        {/* Menu */}
        <div className="flexContainer gap-5  ">
          <NavLink link="/" title="Home" />
          <NavLink link="/shop" title="Shop" />
          <NavLink link="/blog" title="Blog" />
          <NavLink link="/contact" title="Contact" />
          <NavLink link="/about" title="About Us" />
          <NavLink link="/sales" title="Sales" />
        </div>
        {/* Discount offer */}
        <h1 className=" text-xs text-black/55">
          Extra 20% off save items ⭐ Free shopping for orders over 1500Tk
        </h1>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <div
            className="visible lg:hidden fixed top-0 right-0 left-0  z-20 min-h-screen
           backdrop-blur-xl overflow-hidden w-full"
          >
            <motion.ul
              className="h-screen flex items-center justify-center flex-col gap-8"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeIn" }}
            >
              <NavLink
                title="Home"
                singleItem={singleItem}
                link="/"
                handleToggleMenu={handleToggleMenu}
                icon={<FaHome size={30} />}
                className={"text-2xl"}
              />
              <NavLink
                title="About"
                singleItem={singleItem}
                link="/about"
                handleToggleMenu={handleToggleMenu}
                icon={<FcAbout size={30} />}
                className={"text-2xl"}
              />
              <NavLink
                title="Contact"
                singleItem={singleItem}
                link="/contact"
                handleToggleMenu={handleToggleMenu}
                icon={<IoMdContact size={30} />}
                className={"text-2xl"}
              />
              <NavLink
                title="Menu"
                singleItem={singleItem}
                link="/shop"
                handleToggleMenu={handleToggleMenu}
                icon={<CgMenuGridO size={30} />}
                className={"text-2xl"}
              />{" "}
              <NavLink
                title="Cart"
                singleItem={singleItem}
                link="/cart"
                handleToggleMenu={handleToggleMenu}
                icon={<IoCartOutline size={30} />}
                className={"text-2xl"}
              />
              <NavLink
                title="Faq"
                singleItem={singleItem}
                link="/"
                handleToggleMenu={handleToggleMenu}
                icon={<FaQuestion size={30} />}
                className={"text-2xl"}
              />{" "}
              <NavLink
                title="Blog"
                singleItem={singleItem}
                link="/"
                handleToggleMenu={handleToggleMenu}
                icon={<FaMicroblog size={30} />}
                className={"text-2xl"}
              />
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeNavbar;
