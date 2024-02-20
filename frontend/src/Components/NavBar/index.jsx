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
            diplay: 'Home',
        },
        {
            path: '/about',
            diplay: 'About',
        },
        {
            path: '/support',
            diplay: 'Support',
        },
        {
            path: '/explore',
            diplay: 'Explore',
        },
        {
            path: '/contact',
            diplay: 'Contact',
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
                            href={link.path}>{link.diplay}</Link>)}
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