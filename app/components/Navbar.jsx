import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed h-[70px] w-full flex items-center justify-center z-[999] backdrop-blur-lg'>
        <div className='h-[1px] absolute bg-gray-400/40 bottom-0 w-[calc(100%-80px)]'/>
        <div className='flex justify-between items-center w-full mx-10'> 
            <h1 className='text-xl poppins-semibold'>Logo</h1>
            <ul className='flex gap-8'>
                <li>Home</li>
                <li>About</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar