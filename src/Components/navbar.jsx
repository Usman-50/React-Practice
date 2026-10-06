import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center bg-indigo-900 px-4 py-2 text-white'>
      <div className=''>
        <p className='font-bold text-2xl'>iTask</p>
      </div>
      <div className='flex gap-4'>
        <p className='hover:cursor-pointer hover:font-bold transition-all text-xl'>Home</p>
        <p className='hover:cursor-pointer hover:font-bold transition-all text-xl'>Your Tasks</p>
      </div>
    </div>
  )
}

export default Navbar
