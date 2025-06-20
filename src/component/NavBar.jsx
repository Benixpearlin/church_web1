import { useState } from "react";


const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
    return (
        <div className="navbarContainer">
            <div className="navbarlogo">
                <h4>Shekinah</h4>
            </div>

            <div className={`navbarmiddle ${isMobileMenuOpen ? 'open' : ''}`}>
                <p>Home</p>
                <p>About us</p>
                <p>Events</p>
                <p>Blogs</p>
                {
                    isMobileMenuOpen && <button>CONTACT US</button>
                }
            </div>

            <div className="navbarlast">
                <button>CONTACT US</button>
            </div>

            {/* Burger icon */}
            <div className={`burger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default NavBar;