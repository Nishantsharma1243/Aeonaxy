import React from 'react'

const Footer = () => {

const data3=[
    {h2:"Introduction"},
    {h2:"All Solutions"},
    {h2:"Introduction"},
    {h2:"Platform & Solutions"},
    {h2:"Non Profits"},
    {h2:"Introduction"},
    {h2:"Introduction"},
    {h2:"Introduction"},
    {h2:"Introduction"},
    {h2:"Introduction"},
    {h2:""},
    {h2:"Introduction"},
    {h2:""},
    {h2:"Introduction"},
    {h2:"Introduction"},
    {h2:""},
    {h2:"Introduction"},
    {h2:""},
    {h2:"Introduction"},
    {h2:"Introduction"},
    {h2:""},
    {h2:"Introduction"},
    {h2:""},
    {h2:"Introduction"},
    {h2:"Introduction"},
    {h2:""},
    {h2:"Introduction"},
    {h2:""},
    {h2:""},
]



  return (
    <div className='w-full p-[5%] h-fit '>
      <h1 className='w-full font-light text-[1vmax] mb-[7%] '>Pretty much any fruit is great for smoothies. Use fresh fruit, frozen fruit or fruit canned in water or its own juice  One great tip is to freeze your fresh produce if you know you won't get to eat it before it goes bad. This works with overripe bananas, strawberries, blueberries, sliced apples and more.</h1>
      <div className='w-full flex gap-[5%] h-[5%] max-[800px]:h-[2%] mb-[2%] '>
            
            <h1 className='text-[1vmax] border-b-2 border-gray-200 w-[30vmax] font-semibold'>Small-to-Medium Buisness</h1>
            <h1 className='text-[1vmax] border-b-2 border-gray-200 w-[30vmax] font-semibold'>EnterPrise</h1>
            <h1 className='text-[1vmax] border-b-2 border-gray-200 w-[15vmax] font-semibold'>More</h1>

      </div>

      <div className='w-full h- mb-0   gap-[2%] flex flex-wrap   '>
               
   {data3.map((links,index)=>{
   return  <h2 className='text-[1vmax] font-light  w-[16%] h-[6%]  pl-[4%]'>{links.h2}</h2>
   })}


      </div>
 
 <div className='w-full gap-[2%]  flex  h-[10%] mt-[10%]'>
     <img className='w-[7%] rounded-full max-[800px]:h-[4vmax] h-[6vmax]' alt='' src="https://logo.com/image-cdn/images/kts928pd/production/2948ad91525f9c01b82d467130b2e34c25026111-500x375.webp?w=640&q=72" />
     <h1 className='text-[3vmax] text-pink-400'>Tropical Smotthies</h1>
 </div>

 <div className='w-full flex text-[1vmax] gap-[2%] border-b-2 border-gray-300 h-[5%] mt-[5%] font-semibold pb-[3%]'>
     <h1>Help</h1>
     <h1>Contact</h1>
     <h1>Fees</h1>
     <h1>Security</h1>
     <h1>Apps</h1>
     <h1>Shops</h1>
     <h1>Enterprise</h1>
     <h1>Partners</h1>
     <h1>Feedback</h1>
 </div>
         
    </div>
  )
}

export default Footer