import React from 'react';
import './index.css';
import Sidebar from '../../Components/SideBar';
import Navbar from '../../Components/NavBar';
import Tabs from '../../Components/TabSection';
import { useNavigate } from 'react-router-dom';

const My_Work = () => {

    const navigate = useNavigate();

    const collection_overview = () => {
        navigate('/collection_overview');
    }

    const request = () => {
        navigate('/request');
    }

  return (
    <div className='container'>

        <div className='sidebar2'>
            <Sidebar />
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

            <div className='overviewSection'>

                <div className='collectionOverview'>
                    <button onClick={collection_overview}><span>Collection Overview</span></button>
                </div>

                <div className='collectionOverview'>
                    <button onClick={request}><span>Request</span></button>
                </div>

                <div className='collectionOverview'>
                    <button><span>Response</span></button>
                </div>

            </div>

            <div className='collectionBox'>
                <div className='box'>

                    <div className='inputBox'>
                        <input type='text' placeholder='Collection ID' />
                    </div>

                    <div className='inputBox'>
                        <input type='text' placeholder='Collection Name' />
                    </div>

                    <div className='btn'>
                        <button>Invite</button>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default My_Work;