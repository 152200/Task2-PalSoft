import React from "react";
import './components.css'

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="home-about-contact">
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
            </div>
            <div className="landing">
                <span>Landing</span>
            </div>
            <button className="buy-now-button">Buy Now</button>
        </nav>
    );
}