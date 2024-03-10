import React from 'react';
import './index.css';
import Logo from '../../Assets/logo1.png';
import Pluse from '../../Assets/plusmath.png';
import Dis from '../../Assets/disconnected.png';
import Open from '../../Assets/openEndWrench.png';
import Time from '../../Assets/timeMachine.png';
import Next from '../../Assets/nextpage.png';
import Search from '../../Assets/search.png';
import User from '../../Assets/user.png';

const Sidebar = () => {
    
  return (
        <div className='sidebar'>
            <div className='top_section'>

                <div className='logo'>
                    <img src={Logo} alt='' />
                </div>

                <div className='title'>
                    <h3>IntegraAllay</h3>
                </div>
                
            </div>

           <div className='workplace1'>

                <div className='work'>
                    <h3>Workplaces</h3>
                </div>

                <div className='pluse'>
                    <img src={Pluse} alt='' />
                </div>
                
            </div>

            <hr className='hr' />
            
            <div className='collectionSection'>
                <div className='collectionLeft'>
                    <div className='icons'>

                        <div className='icon'>
                            <img src={Dis} alt='' /><br />
                            <span>Collections</span>
                        </div>

                        <div className='icon'>
                            <img src={Time} alt='' /><br />
                            <span>History</span>
                        </div>

                        <div className='icon'>
                            <img src={Open} alt='' /><br />
                            <span>Setting</span>
                        </div>

                    </div>
                </div>

                <div className='collectionRight'>
                    <div className='top'>
                        <div className='pluse1' >
                            <img src={Pluse} alt='' />
                        </div>

                        <div className='search'>
                            <img src={Search} alt='' />
                        </div>
                    </div>

                    <div className='right'>
                        <div className='content'>
                            <div className='icon1'>
                                <img src={Next} alt='' />
                            </div>

                            <div className='name'>
                                <span>Collection names</span>
                            </div>

                        </div>

                        <div className='content'>
                            <div className='icon1'>
                                <img src={Next} alt='' />
                            </div>

                            <div className='name'>
                                <span>Collection names</span>
                            </div>

                        </div>

                        <div className='content'>
                            <div className='icon1'>
                                <img src={Next} alt='' />
                            </div>

                            <div className='name'>
                                <span>Collection names</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='userSection'>
                <div className='user'>
                    <div className='userImage'>
                        <img src={User} alt='' />
                    </div>

                    <div className='userName'>
                        <h3>Hashara Nethmi</h3>
                        <span>hasharanethmi2020@gmail.com</span>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Sidebar;