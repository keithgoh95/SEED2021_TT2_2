import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, SetButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            SetButton(false);
        } else {
            SetButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src="images/img-dbslogo.jpg" />      
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
                        <li className='nav-item'>
                            <Link to='/balance' className='nav-links' onClick={closeMobileMenu}>
                                Balance
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/transfer' className='nav-links' onClick={closeMobileMenu}>
                                Transfer
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/logout' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Logout
                            </Link>
                        </li>    
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Logout</Button>} 
                </div>
            </nav>
        </>
    )
};

export default Navbar
