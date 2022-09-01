import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/" className="link">GreenTech Consult</Link>
                    </li>

                    <li>
                        <a href="tel:+2347066796537" title="Call now" className="link">{}Tel: +2347066796537 </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;