import Image from 'next/image'
import React from 'react'

const SeoInfo = ({title,content,image}) => {
  return (
   <div className="flex justify-between gap-2 my-8">
              <Image className='pb-28' width={30} height={30} src={image} alt="img" />
            <div>
              <p className="text-xl text-[#0A56F1] font-bold mb-4">{title}</p>
              <p>{content}</p>
            </div>
          </div>  )
}

export default SeoInfo