import React from 'react';
import './index.css';
import Search from '../../Assets/search.png';
import User from '../../Assets/user.png';

const Navbar = () => {

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
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Support</a></li>
                        <li><a href='#'>Explore</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li>
                            <a href='#'>
                                <img src={User} alt='' />
                            </a>
                        </li>
                    </div>
                </div>
            </div>
  )
}

export default Navbar;