import React from 'react'

const DigitalServiceCard = ({title, content,image}) => {
  return (
 <div className='digitalServiceCard p-8 pb-28 relative'>
    <div className='flex gap-2 mb-4'>
           <div className='bg-white p-1 rounded-lg'>
            <img src={image} alt='icon' className='w-12'/>
            </div>
<div>
    <p className='font-bold pt-4 text-xl text-[#0A56F1]'>{title}</p>
    </div>
    </div>
     <p className='text-center mb-4'>{content}</p>
     <button className='bg-[#E68F50] mb-8 text-white rounded-full px-4 py-2 absolute bottom-1'>{'>'}</button>
    </div> )
}

export default DigitalServiceCard