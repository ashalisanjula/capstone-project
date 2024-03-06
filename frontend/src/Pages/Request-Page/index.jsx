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

    const [ val, setVal ] = useState('Requst Name');

    const click = () => {
        alert("Your request - " + (val) );
    }

    const change = event => {
        setVal(event.target.value);
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
            
            <div className='tabSection'>

                <Tabs />

            </div>

            <div className='workplace2'>
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
                            <button>Send</button>
                        </div>

                    </div>

                    <div className='flex'>

                        <div className='inputBox'>
                            <input type='text' onChange={change} value={val} />
                        </div>

                        <div className='inputBox'>
                            <input type='text' placeholder='Request Headers' />
                        </div>
                      
                    </div>

                    <div className='input'>
                        <div className='input-left'>
                            <div className='input-table'>
                                <div className='table-title'>
                                    <span>Request Body</span>
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
                                    <span>Query Params</span>
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
                                <span>Request</span>
                            </div>

                            <hr className='request-hr'/>

                            <div className='request-btn'>
                                <button onClick={click}>View Request</button>
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