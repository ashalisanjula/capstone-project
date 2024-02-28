import React from 'react';
import './popup.css';
import { AiFillCloseCircle } from "react-icons/ai";

function popup(props) {
  return (props.triger) ? (
    <div className='collectionBox'>
        <div className='box'>

            <div className='close-btn'>
                <span onClick={() => props.setTriger(false)}><AiFillCloseCircle className='icn'/></span>
                { props.children }
            </div>

            <div className='inputBox'>
                <input type='text' placeholder='Collection ID' />
            </div>

            <div className='inputBox'>
                <input type='text' placeholder='Collection Name' />
            </div>

            <div className='btn'>
                <button>Create</button>
            </div>

            {/* <div className='btn'>
                <button onClick={() => props.setTriger(false)}>Close</button>
                { props.children }
            </div> */}

        </div>
    </div>
  ) : '';
 
}

export default popup;
