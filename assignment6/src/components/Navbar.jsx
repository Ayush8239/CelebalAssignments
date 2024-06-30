import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
         <img onClick={()=>navigate(1)} className='h-12 p-2 rounded-2xl cursor-pointer' src={assets.spotify_logo} alt="" />
         <p className='text-2xl text-[#1db954] py-1 md:block cursor-pointer'>Spotify</p>
        </div>  
        <div className='flex items-center gap-4'>
            <p className='bg-[#1db954] text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
            <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
            <p className='bg-[#1db954] text-black w-7 h-7 rounded-full flex items-center justify-center font-bold'>A</p>
        </div>
    </div>
    <div className="capsules flex items-center gap-2 mt-4 p-2.5">
    <button className="border-none px-2 py-1 rounded-full bg-gray-800 text-white">All</button>
    <button className="border-none px-2 py-1 rounded-full bg-gray-800 text-white">Music</button>
    <button className="border-none px-2 py-1 rounded-full bg-gray-800 text-white">Podcast</button>
</div>

    </>
  )
}

export default Navbar
