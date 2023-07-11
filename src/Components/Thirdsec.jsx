import React from 'react'

const Thirdsec = () => {
  return (
    <div className='thirdSection'>
      <p className='menutag'>Menu</p>
      <div className='grid-container pt-11'>
      <div className='w-60 ml-40'><img src='./src/assets/Pic1.png'/></div>
      <div className='pt-20 px-20'>
        <p className='Sname'>Caprese Salad</p>
        <p className='Spara'> A classic Italian delight, Caprese Salad is a refreshing blend of juicy tomatoes, fresh mozzarella cheese, and fragrant basil 
          leaves drizzled with extra virgin olive oil.</p>
        <p className='Sname'>$15.2</p>
      </div>
      
      <div className='w-60 ml-40 md:mt-10 IV1 md:hidden'><img src='./src/assets/Pic2.png'/></div>
      <div className='pt-20 px-20 md:mt-10'>
        <p className='Sname'>Panzanella Salad</p>
        <p className='Spara'> A Tuscan specialty, Panzanella Salad is a rustic dish that combines
         chunks of crusty bread, ripe tomatoes, cucumbers, red onions, and fresh basil.</p>
        <p className='Sname'>$12</p>
      </div>
      <div className='w-60 ml-40 md:mt-10 IV2 '><img src='./src/assets/Pic2.png'/></div>

      <div className='w-60 ml-40 md:mt-10'><img src='./src/assets/Pic3.png'/></div>
      <div className='pt-20 px-20 md:mt-10'>
        <p className='Sname'>Insalata di Rucola</p>
        <p className='Spara'>Also known as Arugula Salad, Insalata di Rucola is a peppery and
         vibrant creation featuring a bed of fresh arugula leaves, shaved Parmesan cheese, and toasted pine nuts</p>
        <p className='Sname'>$18</p>
      </div>
      </div>
      <div className='form md:flex mt-20'>
        <form>
          <p className='title4'>Contact Us</p>
          <input type='text' placeholder='Username' className='input'/>
          <input type='text' placeholder='Email' className='input'/>
          <textarea type='text' placeholder='Message' className='input text'/>
          <button type='submit' className='button ml-20 px-20 bg-white'>Send</button>
        </form>
        <div className='text-white text-lg p-14 md:pt-32'>
          <span className='text-2xl px-5'>Or</span>
          <span>Connect via cell-phone: </span><p className='px-16'>
            0301-12345678</p>
          </div>
        <div className='px-10 maps'><img src='./src/assets/Maps.png'/></div>
      </div>
      <div className='cards md:flex'>
        <div className='m-20'><img src='./src/assets/Card1.png'/></div>
        <div className='m-20'><img src='./src/assets/Card2.png'/></div>
      </div>
    </div>
  )
}

export default Thirdsec