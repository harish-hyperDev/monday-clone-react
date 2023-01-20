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
    <div className='w-2 m-[2px]' style={{backgroundColor: color}}></div>
      <Link className='flex w-full [&>*]:bg-[rgb(221,221,221)] [&>*]:m-[2px] [&>*]:p-6 [&>*]:flex [&>*]:w-full [&>*]:items-center [&>*]:text-center'>
        
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticket={ticket} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={ticket.priority} />
        <ProgressDisplay progress={ticket.progress} />        
      </Link>
      <DeleteBlock />
    </div>
  )
}

export default TicketCard