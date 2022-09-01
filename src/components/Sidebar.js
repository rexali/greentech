import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <ul>
            <li>
                <Link to="/" className="link">Home</Link>
            </li>

            <li>
                <Link to="/about" className="link">About</Link>
            </li>

            <li>
                <Link to="/services" className="link">Services</Link>
            </li>

            {/* <li>
                <Link to="/blog" className="link">Blog</Link>
            </li> */}

            <li>
                <Link to="/contact" className="link">Contact</Link>
            </li>

            <li>
                <Link to="/portfolio" className="link">Portfolio</Link>
            </li>

            <li>
                <Link to="/testimonials" className="link">Testimonials</Link>
            </li>

            <li>
                <Link to="/gallery" className="link">Gallery</Link>
            </li>

            <li>
                <Link to="/events" className="link">Events</Link>
            </li>
        </ul>
    )
};

export default Sidebar;