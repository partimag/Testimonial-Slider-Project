import React, { useState } from 'react'
import Card from './Card'
import{FiChevronLeft,FiChevronRight}from 'react-icons/fi';


function Testity(props) {
    let reviews=props.reviews;
    const[index,setIndex]=useState(0);
    function handlerLeft(){
        if(index-1<0){
            setIndex(reviews.length-1);

        }else{
            setIndex(index-1);

        }

    }
    function handlerRight(){
        if(index+1 >=reviews.length){
            setIndex(0)
        }else{
            setIndex(index+1)

        }

    }
    function handlerSuprise(){
        let randomLength= Math.floor(Math.random()*reviews.length)
setIndex(randomLength)
    }
  return (
    <>
                    <div className='flex flex-col justify-center items-center bg-white w-[85vw] md:w-[700px] mt-10px p-10  transition-all duration-700'>
                <Card review={reviews[index]}/>
            </div>
            <div className='flex  justify-center items-center text-3xl top-5 text-violet-400'>
    <button className='cursor-pointer hover:text-violet-700' onClick={handlerLeft}><FiChevronLeft/></button>
    <button className=' cursor-pointer hover:text-violet-700' onClick={handlerRight}><FiChevronRight/></button>
    </div>
    <div className=' justify center items-center top-5 bg-violet-400 hover:text-violet-700 cursor-pointer px-10 py-10 rounded-md font-bold text-lg text-white text-center' > 
      <button onClick={handlerSuprise}>suprise Me </button></div>
            </>
  )
}

export default Testity