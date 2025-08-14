import { useState } from 'react';
import './Navbar.css'
import { getImageUrl } from '../../utils';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='navbar'>
            <a className="title" href="/">Portfolio</a>

            <div className="menu">
                <img className="menuBtn"
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`menuItems ${menuOpen ? 'menuOpen' : ''}`} onClick={() => setMenuOpen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar

