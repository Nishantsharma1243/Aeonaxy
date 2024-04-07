import React from 'react'

const Page7 = () => {

const data2=[
    {image:"https://i.pinimg.com/236x/c4/20/73/c420738d8dac162aee5a500f53dfc7f2.jpg"},
    {image:"https://i.pinimg.com/236x/e5/e2/15/e5e215c431378bdf5c9f4df3345d1294.jpg"},
    {image:"https://i.pinimg.com/236x/ff/2d/2d/ff2d2d05bb2cf797271d2aa929dbb8f3.jpg"},
    {image:"https://i.pinimg.com/236x/c5/a5/48/c5a5485710f79503ff20a68733549bfb.jpg"},
    {image:"https://i.pinimg.com/236x/80/7a/00/807a002eee3cfda905efcf36b776c214.jpg"},
    {image:"https://i.pinimg.com/236x/92/03/2c/92032cdf1351953d5bf9141237a65efc.jpg"},
    {image:"https://i.pinimg.com/236x/62/67/17/62671716ecec1752fe8ef187ff0aac0a.jpg"},
    {image:"https://i.pinimg.com/236x/7f/80/da/7f80da6c1798da0b8cdaa1b510b230c8.jpg"},
    
 
 
]


  return (
    <div className='w-full h-[50vmax] pt-[5%] bg-[#FFFFFF'>
     
         <div className='w-full text-center  pl-[20%] pr-[20%] '>
         <h1 className=' justify-center  mb-[8%] text-[2vmax]'>Smoothies for Immune Support: Boost Your Body with These All-Natural Drinks.</h1>
         </div>

        
         <div className='w-full  text-center flex flex-col h-[20vmax]  items-center justify-center flex-wrap gap-10 justify-between  pb-[2%]  pt-[2%]    pl-[15%] pr-[15%] '>
   
         {data2.map((logo,index)=>{
        return     <div key={index} className='w-[10%] h-[5.7vmax]  overflow-hidden bg-blue-300'>
               <img className='w-full h-full object-cover' alt='' src={logo.image}/>
          </div>
         })} 
         </div>



    </div>
  )
}

export default Page7