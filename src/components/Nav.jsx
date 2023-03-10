import React from 'react'
import logo from '../assets/crm-logo.png'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className='h-[100vh] bg-[rgb(43,43,63)] text-white text-center flex-col justify-between'>
      <div className='p-3 w-[40px] flex flex-col'>
        <img src={logo} />
      </div>
      <div className='[&>div]:my-[5px] [&>div]:cursor-pointer'>
        <div className='text-white font-bold' onClick={() => navigate('/ticket')}>＋</div>
        <div className='text-white font-thin' onClick={() => navigate('/')}>❮❮</div>
      </div>
    </nav>
  )
}

export default Nav