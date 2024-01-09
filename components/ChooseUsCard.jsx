import React from 'react'

const ChooseUsCard = ({title,image}) => {
  return (
    <div className='chooseCard flex gap-2 flex-col md:flex-row md:justify-between p-2'>
        <div className='bg-white p-1 rounded-lg'><img src={image} alt='icon' className='w-12'/></div>
<div><p className='font-bold text-lg pt-3 text-[#0A56F1]'>{title}</p></div>
    </div>
  )
}

export default ChooseUsCard