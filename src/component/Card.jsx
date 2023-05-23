import React from 'react'
import {FaQuoteLeft,FaQuoteRight}from 'react-icons/fa';

function Card(props) {
    let review=props.review;
  return (
    <div className='flex flex-col md:relative justify-center items-center'>
<div   className=' justify-center items-center'>
    <div className=' absoulte top-[-7px] z-[10] mx-auto'>
        <img 
        className='aspect-square rounded-full w-[140px] h-[140px] z-25' src={review.image}/>

    </div>
      <div className="bg-violet-500 h-[140px] w-[140px]  rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
          <div className='text-center mt-7'>
<p className='font-bold text-2xl capitalize'>{review.name}</p>
    </div>

    <div className='text-center mt-7' >
        <p className='text-violet-500 upercase text-sm'>{review.job}</p>
    </div>
    <div className='text-center mt-5 text-violet-500 mx-auto'>
        <FaQuoteLeft/>
    </div>
    <div className='text-center mt-4 text-slate-500'>
        <p>{review.text}</p>
    </div>
    <div className='text-center mt-5 text-violet-500 mx-auto' >
        <FaQuoteRight/>
    </div>
    </div>

    </div>
  )
}

export default Card