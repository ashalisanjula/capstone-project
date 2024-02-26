import React from 'react';
import './index.css';
import Sidebar from '../../Components/SideBar';
import Navbar from '../../Components/NavBar';
import Tabs from '../../Components/TabSection';
import { useNavigate } from 'react-router-dom';

const Request = () => {

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

            <div className='workplace'>
                <span>Workplace Name</span>
            </div>

            <hr className='hr1' />

            <div className='overviewSection'>

                <div className='collectionOverview'>
                    <button onClick={collection_overview}><span>Collection Overview</span></button>
                </div>

                <div className='collectionOverview'>
                        <button onClick={request}>
                            <div className='active'>
                                <span>Request</span>
                            </div>
                        </button>
                </div>

                <div className='collectionOverview'>
                    <button onClick={response}><span>Response</span></button>
                </div>

            </div>

            <div className='requestBox'>
                <div className='box'>

                    <div className='flex1'>

                        <div className='inputBox1'>
                            <input type='text' placeholder='Request ID' />
                        </div>

                        <div className='inputBox1'>
                            <input type='text' placeholder='Request Name' />
                        </div>

                    </div>

                   <div className='inputBox'>
                        <input type='text' placeholder='Request URL' />
                    </div>

                    <div className='methodBox'>
                        <label className='lable'>Request Method</label>
                        <select id="method-select">
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                        </select>
                    </div>

                    <div className='flex1'>
                        <div className='inputBox1'>
                            <input type='text' placeholder='Request Headers' />
                        </div>

                        <div className='inputBox1'>
                            <input type='text' placeholder='Request Body' />
                        </div>
                    </div>

                    <div className='inputBox'>
                        <input type='text' placeholder='Query Params' />
                    </div>

                    <div className='buttonBox'>
                        <button>Send Request</button>
                    </div>

                </div>

                
            </div>

        </div>
    </div>
  )
}

export default Request;