
import './App.css'
function App() {


  return (
    <div>
      <div className='Main'>
    <nav className="flex items-center justify-between p-4">
      <div className="logo"><img src='./src/assets/Logo.png'/></div>
      <ul className="flex space-x-4 menu">
        <li><a className="text-gray-800 hover:text-gray-600 font-semibold text-xl pr-4" href="#">Home</a></li>
        <li><a className="text-gray-800 hover:text-gray-600 font-semibold text-xl pr-4" href="#">About Us</a></li>
        <li><a className="text-gray-800 hover:text-gray-600 font-semibold text-xl pr-4" href="#">Menu</a></li>
        <li><a className="text-gray-800 hover:text-gray-600 font-semibold text-xl pr-4" href="#">Contact</a></li>
      </ul>
      <div className='md:hidden cursor-pointer'><img src='./src/assets/BurgerMenu.png'/></div>
    </nav>
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
      </div>
    <div className='curve'><img src='./src/assets/Curve2.png'/></div>    
    <div className='mid'>
      <div className='md:flex md:mt-40'>
        <div className='md:absolute  bowl'><img src='./src/assets/SaladBowl.png'/></div>
        <div className='md:pt-20 rag '><p className='title3'>Nutricious Delight</p><p>Indulge in the epitome of culinary excellence at 
          our Italian-inspired restaurant, where the vibrant flavors of fresh, healthy ingredients intertwine
           to create a symphony of taste and wellness. Savor the artistry of our expert chefs as they
           craft an exquisite array of salads, meticulously composed to ignite your senses and nourish your body.</p></div>
      </div>
    </div>
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
      <div className='form'>
        <form>
          <p className='title4'>Contact Us</p>
          <input type='text' placeholder='Username' className='input'/>
          <input type='text' placeholder='Email' className='input'/>
          <textarea type='text' placeholder='Message' className='input'/>
        </form>
      </div>
    </div>
    </div>
  

  )
}

export default App
