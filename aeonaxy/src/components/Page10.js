import React from 'react'

const Page10 = () => {
  return (
    <div className='w-full flex gap-10 h-[80vh] max-[800px]:h-fit pt-[2%] pb-[2%] pl-[5%] pr-[5%]  bg-gray-300'>

        <div className='w-[50vmax] p-[3%] h-full bg-white'>


           <div className='w-full h-[50%]  bg-red-300 overflow-hidden '>
              <img className='w-full h-full object-cover' alt='' src='https://media-cdn.tripadvisor.com/media/photo-s/0f/96/2b/8c/interior-ambience.jpg' />
           </div>
           <h1 className='text-[2vmax] max-[800px]:text-[1.2vmax] mt-5'>Visit Our restaurants nears you.</h1>
             <h4 className='text-[1vmax]'>Click on visit to see the address or book a table and make a order also from zomato.</h4>
         
         <button className='p-[2%] mt-[10%] rounded-full bg-pink-400'>Visit Restaurant.</button>

        </div>


        <div className='w-[50vmax] p-[3%] h-full bg-white'>
           
        <div className='w-full h-[50%] bg-red-300 overflow-hidden'>
              <img className='w-full h-full object-cover' alt='' src='https://i.pinimg.com/736x/18/ba/de/18bade1080e170de1dc4fd1857d506ec.jpg' />
           </div>
           <h1 className='text-[2vmax] max-[800px]:text-[1.2vmax] mt-5'>Visit Our restaurants nears you.</h1>
             <h4 className='text-[1vmax]'>Click on visit to see the address or book a table and make a order also from zomato.</h4>
         
         <button className='p-[2%] mt-[10%] rounded-full bg-pink-400'>Visit Restaurant.</button>

        </div>

    </div>
  )
}

export default Page10