import videoBg from '../assets/videoBg.mp4'
import React, {useState} from 'react';
import Modal from '../Modal';
import '../Modal.css'


const Main = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='main' >
      {/*<div className='overlay' ></div>*/}
      <video src={videoBg} autoPlay loop muted />
      <div className='content1' >
        <div>
          <button className='modalBtn1' onClick={() => setOpenModal(true)} >Start</button>
          <Modal open={openModal} onClose={()=> setOpenModal(false)} />
        </div>
      </div>
    </div>
  )
}

export default Main