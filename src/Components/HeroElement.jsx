import React from 'react'

const HeroElement = () => {
  return (
    <div className='flex Main2'>
  <div className="pt-20 px-20 pb-10 title-container">
    <span className='Title'><span className="title ">HEALT</span><span className="title wte">HY</span></span>
    <span className="title2 font-normal">Food</span>
    <p className="text mt-4 text-gray-800 pr-20">
      Dive into Our Delectable Menu and Elevate Your Well-being. A Taste Journey Like No Other
    </p>
    <button className='md:px-16' >Order Now!</button>
    </div>
  <div className='w-96 h-auto  md:mt-10 md:mr-20 img'>
    <img src='./src/assets/FoodPic.png'  />
  </div>
    </div>
  )
}

export default HeroElement