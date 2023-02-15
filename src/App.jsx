import './App.css';
import {data} from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Main from './components/Main';
import React, {useState} from 'react';
import Modal from './Modal';
import './Modal.css';

const App = () => {

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const ShowTime = () => {
    let date = new Date();
    console.log(date);

    let weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'Octuber',
        'November',
        'December',
    ];

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';

    let dayOfWeek = weekday[date.getDay()]
    let dayOfMonth = date.getDate()

    if (h === 0) {
        h = 12;
    }

    if (h > 12) {
        h = h-12;
        session = 'PM';
    }

    let time = h + ':' + m + ':' + s + ' ' + session

    document.querySelector('.clock').innerText = time
    document.querySelector('.clock').textContent = time 

    document.querySelector('.day').innerHTML =
    months[date.getMonth()] + ' ' + dayOfMonth + ', ' + date.getFullYear()

    document.querySelector('.dayOfWeek').innerHTML = dayOfWeek
    setTimeout(ShowTime, 1000)

  };

  ShowTime()
  
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Main />
      <div 
        className='relative flex items-center' >
        <MdChevronLeft 
          className='opacity-50 cursor-pointer hover:opacity-100' 
          onClick={slideLeft} 
          size={40} />
        <div 
          id='slider' 
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' >
          {data.map((item)=> (
            <img 
              onClick={() => setOpenModal(true)} 
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' 
              src={item.img} 
              alt='/' 
              />
          ))}
        </div>
        <Modal open={openModal} onClose={()=> setOpenModal(false)} />
        <MdChevronRight 
          className='opacity-50 cursor-pointer hover:opacity-100' 
          onClick={slideRight} 
          size={40} />
      </div>
    </>
  )
}

export default App