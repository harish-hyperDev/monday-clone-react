import React from 'react'
import blankAvatar from '../assets/blank-profile.png'

const AvatarDisplay = ({ ticket }) => {
  // console.log(ticket)
  return (
    <div className='flex justify-center w-full'>
      <div className='h-12 w-12 overflow-hidden rounded-3xl'>
        <img 
          className='w-full'
          src={ticket.avatar ? ticket.avatar : blankAvatar} alt={'profile photo of ' + ticket.owner} 
        />
      </div>
    </div>
  )
}

export default AvatarDisplay