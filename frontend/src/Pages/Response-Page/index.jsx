import React from 'react';
import Sidebar from '../../Components/SideBar';
import Navbar from '../../Components/NavBar';
import Tabs from '../../Components/TabSection';

const Response = () => {

  return (
    <div className='container'>

        <div className='sidebar3'>
            <Sidebar />
        </div>

        <div className='navbarSide'>

            <div className='navbar3'>
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
                    <button><span>Collection Overview</span></button>
                </div>

                <div className='collectionOverview'>
                    <button><span>Request</span></button>
                </div>

                <div className='collectionOverview'>
                    <button><span>Response</span></button>
                </div>

            </div>

            <div className='collectionBox'>
                <div className='box'>

                    <div className='inputBox'>
                        <input type='text' placeholder='Response Object' />
                    </div>

                    <div className='inputBox'>
                        <input type='text' placeholder='Response Headers' />
                    </div>

                    <div className='inputBox'>
                        <input type='text' placeholder='Response Status' />
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

export default Response;