import React, { useState } from 'react';
import './styles.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'reactstrap';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(3);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#E-Commerce">E-commerce</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#home" onClick={handleMenuClick}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#datos-personales" onClick={handleMenuClick}>Datos Personales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills" onClick={handleMenuClick}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#tools" onClick={handleMenuClick}>Tools</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#carrito-de-compras">
                            <FaShoppingCart className="navbar__cart-icon" />
                            <Badge className="navbar__cart-count" color="danger">{cartCount}</Badge>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;



