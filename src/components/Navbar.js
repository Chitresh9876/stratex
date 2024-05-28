import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
    <div className="navbar">
            <Link to={"/browse"} className="logo"> LOGO</Link>
            <Link to={"/favourite"} className="favourite"> Favourite</Link>
    </div>
)};

export default Navbar;
