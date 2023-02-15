import React from 'react';
import nft from './nft.jpg';
import './Modal.css';

const Modal = ({open, onClose}) => {
  if (!open) return null
  return (
    <div onClick={onClose} className='overlay1' >
        <div onClick={(e)=> {
        e.stopPropagation()
        }} className="modalContainer1">
            
                <img src={nft} alt="" className='img1' />
            
            <div className="modalRight1">
                <p onClick={onClose} className="closeBtn1">X</p>
                <div className="content1">
                    <p>Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. 
                        Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal