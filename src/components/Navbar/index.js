import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';




// About us dropdown menu items
const AboutUsMenuItems = [
    {
        title: 'Who we are',
        path: '/about',
        cName: 'dropdown-link'
    },
    {
        title: 'Support Us',
        path: '/support',
        cName: 'dropdown-link'
    },
    {
        title: 'Join Us',
        path: '/join',
        cName: 'dropdown-link'
    },
    {
        title: 'Contact Us',
        path: '/contact',
        cName: 'dropdown-link'
    }
];

//   knowledge center menu items
const KnowledgeCenterMenuItems = [
    {
        title: 'Blood donation',
        path: '/blood-donation',
        cName: 'dropdown-link'
    },
    {
        title: 'Platelet donation',
        path: '/platelet-donation',
        cName: 'dropdown-link'
    },
    {
        title: 'Thallasaemia major',
        path: '/thallasaemia-major',
        cName: 'dropdown-link'
    },
    {
        title: 'Thallasaemia minor',
        path: '/thallasaemia-minor',
        cName: 'dropdown-link'
    }
];




function Navbar() {
    const [click, setClick] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);
    const [knowledgeCenterDropdown, setKnowledgeCenterDropdown] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const onMouseLeaveAbout = () => {
        setAboutDropdown(false);
    };

    const onMouseLeaveKnowledgeCenter = () => {
        setKnowledgeCenterDropdown(false);
    };

    const onAboutDropdownClick = () => {
        setAboutDropdown(!aboutDropdown);
    }

    const onKnowledgeCenterDropdownClick = () => {
        setKnowledgeCenterDropdown(!knowledgeCenterDropdown);
    }

    return (
        <>
            <div>
                <nav className='navbar'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Life Savers
          <i className='fab fa-firstdraft' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
            </Link>
                        </li>
                        <li
                            className='nav-item'
                            onMouseLeave={onMouseLeaveAbout}
                            onClick={onAboutDropdownClick}
                        >
                            <span
                                className='nav-links'
                            >
                                About <i className='fas fa-caret-down' />
                            </span>
                            {aboutDropdown &&
                                (
                                    <ul
                                        onClick={handleClick}
                                        className={!aboutDropdown ? 'dropdown-menu clicked' : 'dropdown-menu'}
                                    >
                                        {AboutUsMenuItems.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link
                                                        className={item.cName}
                                                        to={item.path}
                                                        onClick={() => setClick(false)}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                )
                            }
                        </li>
                        <li
                            className='nav-item'
                            onMouseLeave={onMouseLeaveKnowledgeCenter}
                        >
                            <span
                                className='nav-links'
                                onClick={onKnowledgeCenterDropdownClick}
                            >
                                Knowledge Center <i className='fas fa-caret-down' />
                            </span>
                            {knowledgeCenterDropdown &&
                                (
                                    <ul
                                        onClick={handleClick}
                                        className={!knowledgeCenterDropdown ? 'dropdown-menu clicked' : 'dropdown-menu'}
                                    >
                                        {KnowledgeCenterMenuItems.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link
                                                        className={item.cName}
                                                        to={item.path}
                                                        onClick={() => setClick(false)}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )
                            }
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}


export default Navbar;