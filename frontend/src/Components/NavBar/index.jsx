import React from 'react';
import './index.css';
import Search from '../../Assets/search.png';
import User from '../../Assets/user.png';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../../Pages/Login';

const Navbar = () => {
    const nav_links = [
        {
            path: '/home',
            display: 'Home',
        },
        {
            path: '/about',
            display: 'About',
        },
        {
            path: '/support',
            display: 'Support',
        },
        {
            path: '/contact',
            display: 'Contact',
        },
    ]

    const navigte = useNavigate();
    
    const login = () => {
        navigte('/login');
    }

  return (
    <div className='navbar'>
                <div className='search_bar'>
                    <div className='text'>
                        <input type='text' placeholder='Search' />
                    </div>

                    <div className='search_icon'>
                        <img src={Search} alt='' />
                    </div> 
                </div>
                

                <div className='list'>
                    <div className='links'>
                        {nav_links.map(link => <Link
                            key={link.path}
                            to={link.path}
                            href={link.path}>{link.display}</Link>)}
                        <li>
                            <a >
                                <img onClick={login} src={User} alt='' />
                            </a>
                        </li>
                    </div>
                </div>
            </div>
  )
}

export default Navbar;