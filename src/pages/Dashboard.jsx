import React from 'react'
import TicketCard from '../components/TicketCard'

const Dashboard = () => {

  const tickets = [
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'MRF Safety 01KA',
      owner: 'Ice Fruit',
      avatar: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1673524495~exp=1673525095~hmac=c1a9c5b223c3c7597f433bf62fa0015b828cf82d9f6f448718baef4f80ae15aa',
      status: 'done',
      priority: 5,
      progress: 40,
      description: "Ice Fruit Ticket",
      timestamp: '2022-02-11T07:36:25'
    },
    {
      category: 'Q1 2022',
      color: 'yellow',
      title: 'BMW Safety 11FC',
      owner: 'Ice Fruit',
      avatar: 'https://img.freepik.com/free-psd/3d-rendering-travel-tourist_23-2149667951.jpg?w=740&t=st=1673524724~exp=1673525324~hmac=ac9807c1b67f77dfe2f56537cfe986105571abec72fd33f3f340c4f3a3a60dc5',
      status: 'in-progress',
      priority: 2,
      progress: 80,
      description: "Ice Fruit Ticket",
      timestamp: '2022-04-15T12:14:11'
    }
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
  ]

  return (
    

    <div className='dashboard p-5 w-full'>
      <h1>My Projects</h1>
      <div className='ticket-container h-[80vh] overflow-scroll'>
        {/* <TicketCard /> */}
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => {
          return (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets.filter(ticket => ticket.category === uniqueCategory).map((filteredTicket, ticketIndex) => (
                <TicketCard 
                  id={ticketIndex}
                  color={filteredTicket.color}
                  ticket={filteredTicket}
                  
                />
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard