import React from 'react'

const Footer = () => {
  return (
    <div className='footer md:flex bg-black'>
      <div className='p-20 pl-10'><p className='title4 title5'>Follow</p>
      <p className='text-white pl-16'>You can Enter your Email to recieve
         the hotest deals and membership alerts right at your inbox.</p>
         <div className='relative w-40'>
          <input type='email' className='input Email ' placeholder='Email'/>
          <button className='md:absolute button button2'>Submit</button></div>
         </div>
      <div className='p-10 '><p className='title4 title5'> Hours</p>
      <div>
        <span className='text-white pl-16'>Monday</span>
        <span className='text-white pl-32'>9:00-18:00</span>        
      </div>
      <div>
        <span className='text-white pl-16'>Tuesday</span>
        <span className='text-white pl-28 ml-3'>9:00-18:00</span>        
      </div>
      <div>
        <span className='text-white pl-16'>Wednesday</span>
        <span className='text-white pl-24 ml-1.5'>9:00-18:00</span>        
      </div>
      <div>
        <span className='text-white pl-16'>Thrusday</span>
        <span className='text-white pl-28 ml-2'>9:00-18:00</span>        
      </div>
      <div>
        <span className='text-white pl-16'>Friday</span>
        <span className='text-white pl-36'>9:00-18:00</span>        
      </div>
      <div>
        <span className='text-white pl-16 mt-2'>Other Days</span>
        <span className='text-white pl-36'>Closed</span>        
      </div>
      </div>
    </div>
  )
}

export default Footer