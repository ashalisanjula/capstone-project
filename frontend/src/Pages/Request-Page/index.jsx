import React from 'react';
import './index.css';
import Sidebar from '../../Components/SideBar';
import Navbar from '../../Components/NavBar';
import Tabs from '../../Components/TabSection';

const Request = () => {

  return (
    <div className='container'>

        <Sidebar />

        <div className='navbarSide'>
            
            <Navbar />

            <div className='tabSection'>

                <Tabs />

            </div>

            <div className='workplace'>
                <span>Workplace Name</span>
            </div>

            <hr className='hr1' />

            <div className='overviewSection'>

                <div className='collectionOverview'>
                    <span>Collection Overview</span>
                </div>

                <div className='collectionOverview'>
                    <span>Request</span>
                </div>

                <div className='collectionOverview'>
                    <span>Response</span>
                </div>

            </div>

            <div className='requestBox'>
                <div className='box'>

                    <div className='inputBox'>
                        <input type='text' placeholder='Request ID' />
                    </div>

                    <div className='inputBox'>
                        <input type='text' placeholder='Request Name' />
                    </div>

                    <div className='inputBox'>
                        <input type='text' placeholder='Request URL' />
                    </div>

                    <div className='inputBox'>
                        <input type='text' placeholder='Request URL' />
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

export default Request;