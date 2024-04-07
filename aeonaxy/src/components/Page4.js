import React from 'react'

const Page4 = () => {
  return (
    <div className='w-full h-[60vh] p-8 max-[800px]:pl-[4%] gap-[5%] max-[800px]:pr-[4%] max-[800px]:gap-[2%] bg-gray-200  flex   '>

    <div className='w-full z-20 max-[800px]:w-[190vmax] max-[800px]:h-[70%] rounded-xl overflow-hidden translate-y-[10%]  h-[120%] bg-red-400'>
       <img alt='' className='pt-20%  w-full h-full object-cover' src="https://i3.wp.com/lmld.org/wp-content/uploads/2014/03/how-to-make-a-fruit-smoothie-10.jpg" /> 
    </div>
    

      <div className=' pt-[5%]  ml-[2%] '>
      <h4 className='text-[2vmax] w-[80%] max '>Power up your day with a smoothie!</h4>
      <p className='pt-[5%] max-[800px]:w-[100%] w-[80%]'>A smoothie is a beverage made by puréeing ingredients in a blender A smoothie commonly has a liquid base, such as fruit juice or milk, yogurt or ice cream.</p>
      </div>
    </div>
  )
}

export default Page4