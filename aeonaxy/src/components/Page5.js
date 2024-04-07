import React from 'react'

const Page5 = () => {
  return (
    <div className='w-full  relative flex p-[8%] justify-between h-fit bg-gradient-to-r from-purple-400 to-pink-400'>
      <div className='pt-[10%] w-[40%] p-[5%]'>
      <h4 className='text-[2vmax] '>The Global Smoothies consumers</h4>
      <p className='mt-[5%] tex-[1vmax] font-light'>The Global Smoothies Market reached USD 11.5 billion in 2022 and is projected to witness lucrative growth by reaching up to USD 22.1 billion by 2031. </p>
     </div>

     <div className='w-[40%] h-[30vmax] rounded-lg overflow-hidden  bg-red-400'>
           <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1638176067000-924231101b88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtb290aGllc3xlbnwwfHwwfHx8MA%3D%3D' />
     </div>
     <img alt='' className=' w-[20%]  h-[15vmax] rounded-lg absolute bottom-6 left-[45%]' src='https://images.unsplash.com/photo-1604298331663-de303fbc7059?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtb290aGllc3xlbnwwfHwwfHx8MA%3D%3D'/>
    </div>
  )
}

export default Page5