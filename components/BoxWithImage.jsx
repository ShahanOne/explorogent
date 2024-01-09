import React from 'react'

const BoxWithImage = ({heading,para1,para2,button,icon,image}) => {
  return (
<div className="rounded-xl my-8 px-8 py-8 grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#f6f8fd] to-[#FFFFFF00]">
        <div className="md:order-1 order-2">
          <p className="text-[#0A56F1] font-bold text-[32px]">
{heading}
          </p>
          <p className="text-[#36454f]">
            {para1}
          </p>
          <br />
          <p className="text-[#36454f]">
            {para2}
          </p>

          <button className="bg-[#E68F50] mt-24 px-4 py-2 flex justify-between gap-2 rounded-[50px]">
            {' '}
         {icon}
            <p className="pt-[5px] text-white">{button}</p>
          </button>
        </div>

          <img className="w-[44rem] order-1 md:order-2" src={image} alt="image" />
      </div>  )
}

export default BoxWithImage