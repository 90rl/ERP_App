import React, {useState} from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom'
import './LoginPage.css';
import CompanyLogo from './CompanyLogo.png'
// import {AiOutlineUser} from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai';
// import Dropdown from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


export default function Navbar() {

//function
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className='navbar-container' >
                    
                <Link to='/Login' className='nav-links' onClick={closeMobileMenu}>
                    <img className="navbar-logo" src={CompanyLogo} alt=""/>  
                </Link>


                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'}/>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu' }>

                        <li className='nav-item' > 
                            <Link to='/document' className='nav-links' onClick={closeMobileMenu}>
                                Dokumenty
                            </Link>
                        </li>
                        <li className='nav-item' > 
                            <Link to='/company' className='nav-links' onClick={closeMobileMenu}>
                                Firmy
                            </Link>
                        </li>
                        <li className='nav-item' > 
                            <Link to='/employee' className='nav-links' onClick={closeMobileMenu}>
                                Pracownicy
                            </Link>
                        </li>

                    </ul>

                    <Dropdown className="dropdown_button">

                        <Dropdown.Toggle variant="dark" size="lg">
                            <AiOutlineUser />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >Wyloguj</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        
                </div>
            </nav>

        </>

    )
}
