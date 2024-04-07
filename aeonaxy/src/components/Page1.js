import React from 'react'
import Image from '../images/img.png'


const Page1 = () => {
  return (
    <>
    <div className='w-full h-[75vh] max-[800px]:h-screen relative mt-[5%]  max-[800px]:overflow-hidden  '>
       <h4 className='absolute left-20 max-[800px]:top-[10%]  top-[25%] max-[800px]:w-[80%]  w-[50%] text-5xl'>Irresistibly delicious, one sip at a time.</h4>
          <p className='absolute left-20 z-30 top-[45%] max-[800px]:w-[80%] max-[800px]:text-pink-700  w-[50%] text-2xl'>Convenient and Time-Saving. Smoothies are a quick and easy way to get a nutritious meal or snack in a matter of minutes. ...</p>
          <button className='absolute left-[7%]  p-4 bottom-[25%] max-[800px]:bottom-[10%] rounded-full bg-white text-pink-500   text-2xl'>Order Now</button>
          <img className='absolute w-[60vh] left-[45%] h-[60vh] bottom-[-20%] z-20' src={Image} alt=""/>
          <img alt='' className='absolute w-[24vh] left-[54.2%] max-[800px]:hidden h-[40vh] z-20 bottom-[-4%] rounded-xl' src='https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21vb3RoaWV8ZW58MHx8MHx8fDA%3D' />
        <img alt='' className='w-full h-full  object-cover ' src="https://as2.ftcdn.net/v2/jpg/03/17/02/99/1000_F_317029950_YCKBoLU3WfCh6WpUNjNuu1gge6xPIN1g.jpg" />
    </div>
    </>
  )
}

export default Page1