import React from 'react'
import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'
import { Link } from 'react-router-dom'
const TicketCard = ({ color, ticket }) => {
  return (
    <div className='flex w-full'>      
      <Link>
        <div className='ticket-color'></div>
        <h3>{ticket.title}</h3>
        <AvatarDisplay />
        <StatusDisplay />
        <PriorityDisplay />
        <ProgressDisplay />        
      </Link>
      <DeleteBlock />
    </div>
  )
}

export default TicketCard