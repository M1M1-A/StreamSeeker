import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css"
import logo from '../../images/whitelogo.png'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useState(false)
    const userId = window.localStorage.getItem('userId')
    const location = useLocation();
    const pathname = location.pathname

    useEffect(() => {
        if (userId) {
            setLoggedInUser(true);
        }
    }, []);

    const handleLogout = () => {
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("userId")
    }

    return (

        <nav className="navbar">
        { !loggedInUser && (
        <>
            <div className="brand">
            <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            </div>
            </div>
            <ul className="links">
                <li><Link to="/" className={pathname === "/" ? "active" : ""} id='home'>Home</Link></li>
                <li><Link to="/login" className={pathname === "/login" ? "active" : ""} id="login">Login</Link></li>
                <li><Link to="/signup" className={pathname === "/signup" ? "active" : ""} id="signup">Signup</Link></li>
            </ul>
        </>
        )}
        {loggedInUser && (
            <>
            <div className="brand">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
            </div>
            <ul className="links">
                <li><Link to="/" className={pathname === "/" ? "active" : ""} id='home'>Home</Link></li>
                <li><Link to={`/users/${userId}`} className={pathname === `/users/${userId}` ? "active" : ""} id="profile">Your Profile</Link></li>
                <li><Link to={`/watchLater/${userId}`} className={pathname === `/watchLater/${userId}` ? "active" : ""} id="watch-later">Watch Later</Link></li>
                <li><a href='/' onClick={handleLogout} id="logout">Logout</a></li>
            </ul>
            </>
        )}
        </nav>
    );
};
export default Navbar;
