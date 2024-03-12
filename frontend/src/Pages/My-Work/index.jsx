import React from 'react';
import './index.css';
import Navbar from '../../Components/NavBar';
import Tabs from '../../Components/TabSection';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Assets/logo1.png';
import Pluse from '../../Assets/plusmath.png';
import Next from '../../Assets/nextpage.png';
import Search from '../../Assets/search.png';
import User from '../../Assets/user.png';
import Popup from '../../Components/PopUp/popup';
import { useState } from 'react';
import VreticalLine from '../../VerticalLine/verticalLine';
import Content from '../../Assets/content.png';

const Collection_Overview = () => {

    const [buttonPopup, setButtonPopup] = useState(false);

    const navigate = useNavigate();

    const collection_overview = () => {
        navigate('/collection_overview');
    }

    const request = () => {
        navigate('/request');
    }

    const response = () => {
        navigate('/response');
    }

  return (
    <div className='container'>

        <div className='sidebar2'>
           
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
                    <div className='collectionRight'>
                        <div className='top'>
                            <div className='pluse1'>
                                <img src={Pluse} alt='' onClick={() => setButtonPopup(true)}/>
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
                                    <span>Project1</span>
                                </div>

                            </div>

                            <div className='content'>
                                <div className='icon1'>
                                    <img src={Next} alt='' />
                                </div>

                                <div className='name'>
                                    <span>Project2</span>
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
        </div>

        <div className='navbarSide'>

            <div className='navbar2'>
                <Navbar />
            </div>
            
            <div className='tabSection'>
                <Tabs />
            </div>

            <div className='myWork'>
                <span>MyWork</span>
            </div>

            <hr className='hr1' />

            <div className='overviewSection1'>

                <div className='collectionOverview'>
                    <button onClick={collection_overview}>
                        <div className='active'>
                            <span>Collection Overview</span>
                        </div>
                    </button>
                </div>

                <div className='collectionOverview'>
                    <button onClick={request}><span>Request</span></button>
                </div>

                <div className='collectionOverview'>
                    <button onClick={response}><span>Response</span></button>
                </div>

            </div>
 

            <div className='body-content'>

                <div className='left-content'>

                    <button>
                        <div className='img'>
                            <img src={Content} alt='' />
                        </div>


                        <div className='add'>
                            <input type='text' placeholder='Add Workspace Description' />
                        </div>

                    </button>

                    
                </div>

                <Popup triger={buttonPopup} setTriger={setButtonPopup}/>

                <div className='right-content'>

                    <div className='vertical'>
                        <VreticalLine />
                    </div> 

                    <div className='about'>
                        <h1>About</h1>
                        <input className='description' type='text' placeholder='Add a summary about this workspace.'></input>  
                        <div className='contributor'>
                            <h1>Contributors</h1>
                            <span>No contibutors to show</span>
                        </div>
                        <button>
                            <img src={Pluse} alt=' ' />
                            <div className='invite'>Invite</div>
                        </button>             
                    </div>

                </div>

            </div>

           

            

            

            {/* <div className='collectionBox'>
                <div className='box'>

                    <div className='inputBox'>
                        <input type='text' placeholder='Collection ID' />
                    </div>

                    <div className='inputBox'>
                        <input type='text' placeholder='Collection Name' />
                    </div>

                    <div className='btn'>
                        <button>Create</button>
                    </div>

                </div>
            </div> */}

        </div>
    </div>
  )
}

export default Collection_Overview;