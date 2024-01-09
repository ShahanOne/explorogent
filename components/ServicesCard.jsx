import React from 'react'

const ServicesCard = ({title,content,image}) => {
  return (
 <div className='servicesCard p-8 text-center'>
<center><img src={image} alt='img'/></center> 
    <p className='font-bold text-lg text-[#0A56F1] my-2'>{title}</p>
    
     <p className='text-center mb-4'>{content}</p>
    </div>  )
}

export default ServicesCard