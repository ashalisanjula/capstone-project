import React, { useState } from 'react';
import './index.css';
import Sidebar from '../../Components/SideBar';
import Navbar from '../../Components/NavBar';
import Tabs from '../../Components/TabSection';
import { useNavigate } from 'react-router-dom';
import VerticalLine from '../../VerticalLine/verticalLine';
import Pluse from '../../Assets/plusmath.png';

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

    const [ inputList, setInputList ] = useState([{ key: "", value: "" }]);


    const [ requestName, setRequestName ] = useState('');
    const [ requestHeader, setRequestHeader ] = useState('Request Headers...');

    const send = () => {
        const getRequestName = document.getElementById('requestName').value;
        const getRequestHeader = document.getElementById('requestHeader').value;
        setRequestName(getRequestName);
        setRequestHeader(getRequestHeader);
    }

    const handleinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleaddclick = () => {
        setInputList([...inputList, { key: "", value: "" }]);
    }

  return (

        
    <div className='container'>
        

        <div className='sidebar3'>

            <Sidebar/>

        </div>

        <div className='navbarSide'>

            <div className='navbar3'>
                
                <Navbar />
                
            </div>
            
            <div className='tabSection3'>

                <Tabs />

            </div>

            <div className='workplace2'>
                <span>MyWork</span>
            </div>

            <hr className='hr2' />

            <div className='overviewSection2'>

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
                    <div className='top-box'>
                        <div className='input-bar'>

                            <div className='method'>
                                <select id="method-select">
                                    <option className='get' value="GET">GET</option>
                                    <option className='post' value="POST">POST</option>
                                    <option className='put' value="PUT">PUT</option>
                                    <option className='delete' value="DELETE">DELETE</option>
                                </select>
                            </div>

                            <div className='vl1'>
                                <VerticalLine />
                            </div>

                            <div className='id'>
                                <input type='text' placeholder='ID' />
                            </div>

                            <div className='vl2'>
                                <VerticalLine />
                            </div>

                            <div className='url'>
                                <input type='text' placeholder='Enter the URL' />
                            </div>
                        </div>

                        <div className='buttonBox'>
                            <button onClick={send}>Send</button>
                        </div>

                    </div>

                    <div className='flex'>

                        <div className='inputBox'>
                            <input id='requestName' type='text' placeholder='Request Name' />
                        </div>

                        <div className='inputBox'>
                            <input id='requestHeader' type='text' placeholder='Request Headers' />
                        </div>
                      
                    </div>

                    <div className='input'>
                        <div className='input-left'>
                            <div className='input-table'>
                                <div className='table-title'>
                                    <span className='requestBody'>Request Body</span>
                                </div>

                                <table border={1} borderColor="white">

                                    <tr className='row1'>
                                        <th className='blank'></th>
                                        <th className='key'>Key</th>
                                        <th className='value'>Value</th>
                                    </tr>

                                    {
                                    inputList.map((x, i) => {
                                        return (

                                        <tr className='row2'>

                                            <th className='blank'><img src={Pluse} alt=''onClick={ handleaddclick }/></th>

                                            <td className='key'><input type='text' onChange={ e => handleinputchange(e,i) }/></td>

                                            <td className='value'><input type='text' onChange={ e => handleinputchange(e,i) }/></td>

                                        </tr>

                                        );
                                    } )}
                                
                                </table>

                            </div>

                            <div className='input-table1'>
                                <div className='table-title'>
                                    <span className='queryParams'>Query Params</span>
                                </div>
                                <table border={1} borderColor="white">

                                    <tr className='row1'>
                                        <th className='blank'></th>
                                        <th className='key'>Key</th>
                                        <th className='value'>Value</th>
                                    </tr>

                                    <tr className='row2'>

                                        <th className='blank'><img src={Pluse} alt='' /></th>

                                        <td className='key'><input type='text' /></td>

                                        <td className='value'><input type='text' /></td>

                                    </tr>
                                
                                </table>

                            </div>

                        </div>

                        <div className='input-line'>
                            <VerticalLine />
                        </div>

                        <div className='input-right'>
                            <div className='right-title'>
                                <span className='request'>Request</span>
                            </div>

                            <hr className='request-hr'/>

                            <div className='request-content'>
                                {requestName=== '' ? 
                                <p>No responses</p> :
                                <p>Request Name : {requestName}<br /><br />
                                   Request Headers : {requestHeader}</p> 
                                }
                            </div>

                        </div>

                    </div>
                   

            </div>
         </div>

        </div>
       
    </div>
  )
}

export default Request;