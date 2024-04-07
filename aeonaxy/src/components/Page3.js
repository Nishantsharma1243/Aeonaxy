import React from 'react'

const Page3 = () => {

  const data =[
    {image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/3/5/1/FNK_Healthy-Tropical-Oat-Smoothie_s4x3.jpg.rend.hgtvcom.791.594.suffix/1396383104702.jpeg',name:"Tropical Oatmeal Smoothie",desc:"This tropical-inspired smoothie is packed with fiber (6 grams per serving), thanks to the fruit and the clever addition of rolled oats." },
    {image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/4/2/3/LS-Library_Cherry-Almond-Smoothie_s4x3.jpg.rend.hgtvcom.791.594.suffix/1522725245192.jpeg',name:"Cherry-Almond Smoothie",desc:"Blitz banana, cherries and yogurt with almond milk for a filling breakfast you'll make again and again."},
    {image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/5/6/1/FNK_creamy-avocado-smoothie_s4x3.jpg.rend.hgtvcom.791.594.suffix/1399406326130.jpeg',name:"Ultra-Creamy Avocado Smoothie", desc:"In many countries’ folks eat avocados for dessert, in custards and in shakes like this one. The riper the avocado, the sweeter the shake, so you'll want to adjust the sweetness to taste."},
   
  ]

  return (
    <div className='w-full h-[85vh] bg-[#F6A0A9] '>
      <div>
        <h1 className='p-[5%] w-full max-[800px]:mb-[27%]  text-[3vmax] text-center'>All Delicious. All The Time All Smoothies, All Fun Be healthier Be sure. Be nature.</h1>
      </div>
   
       
       {/* img ka map  */}
          
      <div  className='w-full  pl-[13%] pr-[13%]  max-[800px]:pl-[7%] max-[800px]:pr-[7%]  flex flex-row gap-10 justify-between'>
       {data.map((value,index)=>{
    return <>
   <div key={index} className=' w-[10%] max-[800px]:w-[20%] h-[8vmax] overflow-hidden rounded-xl  bg-red-400'>
            <img className='object-cover w-full h-full' src={value.image} alt=''/>
          
          </div>
          </> 
      })}
        </div>

          {/* name kae map  */}

        <div  className='w-full mt-[2%] pl-[8%]  text-center pr-[8%] max-[800px]:pl-[7%]:pr-[7%]  flex flex-row  justify-between'>
       {data.map((value,index)=>{
    return <>
             <h4 key={index} className='text-[1.5vmax] font-semibold w-[20%] max-[800px]:w-[22%]'>{value.name}</h4>
          </> 
      })}
        </div>

        {/* para ka map  */}

        <div  className='w-full   pl-[6%]  text-center pr-[6%] max-[800px]:pl-[7%]:pr-[7%] gap-[10%]  flex flex-row  justify-between'>
       {data.map((value,index)=>{
    return <>
             <p key={index} className='text-[1vmax]    w-[25%] max-[800px]:w-[45%] max-[800px]:text-[1.4vmax]'>{value.desc}</p>
          </> 
      })}
        </div>
    
     
    </div>
  )
}

export default Page3