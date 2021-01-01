import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import styled from 'styled-components';
import Logo from '../../images/logo.png'


// About us dropdown menu items
const AboutUsMenuItems = [
    {
        title: 'Who we are',
        path: '/about#about',
        cName: 'dropdown-link'
    },
    {
        title: 'Support Us',
        path: '/about#support',
        cName: 'dropdown-link'
    },
    {
        title: 'Join Us',
        path: '/about#join',
        cName: 'dropdown-link'
    },
    {
        title: 'Contact Us',
        path: '/about#contact',
        cName: 'dropdown-link'
    }
];

//   knowledge center menu items
const KnowledgeCenterMenuItems = [
    {
        title: 'Blood donation',
        path: '/blood-donation#landing',
        cName: 'dropdown-link'
    },
    {
        title: 'Platelet donation',
        path: '/platelet-donation#landing',
        cName: 'dropdown-link'
    },
    {
        title: 'Thallasaemia major',
        path: '/thallasaemia-major#landing',
        cName: 'dropdown-link'
    },
    {
        title: 'Thallasaemia minor',
        path: '/thallasaemia-minor#landing',
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
                    <Link to='/#home' className='navbar-logo' onClick={closeMobileMenu}>
                        <LogoImgContainer>
                            <LogoImg src={Logo}/>
                        </LogoImgContainer>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/#home' className='nav-links' onClick={closeMobileMenu}>
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

const LogoImgContainer = styled.div`

`
const LogoImg = styled.img`
    width:150px;
    @media screen and (max-width:950px)
    {
        width:100px;
    }
`