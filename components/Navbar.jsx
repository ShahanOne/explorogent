import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-white py-4 px-8'>
        <div className='bg-black h-16 w-16' />
        <div className='navbar flex gap-12 p-4'>
            <button className='rounded-2xl font-bold shadow-lg bg-white py-2 px-4'>Home</button>
            <button className='font-bold'>About Us</button>
            <button className='font-bold'>Work</button>
            <button className='font-bold'>Services</button>
            <button className='font-bold'>Clients</button>
            <button className='font-bold'>Team</button>
                        <button className='font-bold'>Contact Us</button>


        </div>
    </div>
  )
}

export default Navbar