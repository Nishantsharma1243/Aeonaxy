import React from 'react'

const Page2 = () => {
  return (
    <div className='w-full h-[75vh] relative justify-between max-[800px]:gap-10 flex bg-zinc-100 '>
       <h1 className='w-[50%] text-4xl max-[800px]:text-[1.6vh] max-[800px]:leading-[230%]  pt-[10%] pl-[10%]'>Smoothies are a popular beverage choice among consumers worldwide they are typically made by blending fruits, vegetables, yogurt or milk, ice, and other ingredients.</h1>

       {/* right side  */}
       <div className='Numbers w-[30%] mr-[10%]  max-[800px]:w-[50%]   pt-[10%] flex flex-col gap-10 '>
       <div className='flex gap-10 border-black border-b-2 h-[35%]'>

       <div>
        <h4 className='text-2xl text-pink-300'>400M+</h4>
        <h2>Million active consumers</h2>
        </div>

        <div>
        <h4 className='text-2xl text-pink-300'>200M+</h4>
        <h2 className='w-[70%]'>Market Around the globe</h2>
        </div>
        
        </div>

        {/* nav right bottom  */}

        <div className='flex gap-10  h-[10%]'>
  

           <div>
                <h4 className='text-2xl text-pink-300'>20+</h4>
                 <h2>Years of Experience</h2>
             </div>

           <div>
               <h4 className='text-2xl text-pink-300'>30+</h4>
                <h2 className='w-[70%]'>Million merchants<sup>1</sup> </h2>
            </div>
 
       </div>

    </div>
       
    </div>
  )
}

export default Page2