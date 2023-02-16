import React from 'react';
import './Modal.css';

const Modal = ({open, onClose}) => {
  if (!open) return null
  return (
    <div onClick={onClose} className='overlay1' >
        <div onClick={(e)=> {
        e.stopPropagation()
        }} className="modalContainer1">
            
                <img src="https://upload.travelawaits.com/ta/uploads/2021/04/a-beautiful-beach-in-the-seyc469471-1024x683.jpg" alt="/" className='img1' />
            
            <div className="modalRight1">
                <p onClick={onClose} className="closeBtn1">X</p>
                <div className="content1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal