import React, { useEffect } from 'react'
import { useMemo, useContext } from 'react'
import TicketCard from '../components/TicketCard'
import CategoriesContext from '../context'

const Dashboard = () => {

  const { categories, setCategories } = useContext(CategoriesContext)
  const tickets = [
    {
      id: 1,
      category: 'Q1 2022',
      color: 'red',
      title: 'Deploy to Docker',
      owner: 'Ice Fruit',
      avatar: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1673524495~exp=1673525095~hmac=c1a9c5b223c3c7597f433bf62fa0015b828cf82d9f6f448718baef4f80ae15aa',
      status: 'Done',
      priority: 5,
      progress: 100,
      description: "Ice Fruit Ticket",
      timestamp: '2022-02-11T07:36:25'
    },
    {
      id: 2,
      category: 'Q1 2022',
      color: 'yellow',
      title: 'Run Safety Checks',
      owner: 'Ice Fruit',
      avatar: 'https://img.freepik.com/free-psd/3d-rendering-travel-tourist_23-2149667951.jpg?w=740&t=st=1673524724~exp=1673525324~hmac=ac9807c1b67f77dfe2f56537cfe986105571abec72fd33f3f340c4f3a3a60dc5',
      status: 'In-Progress',
      priority: 2,
      progress: 50,
      description: "Ice Fruit Ticket",
      timestamp: '2022-04-15T12:14:11'
    },
    {
      id: 3,
      category: 'Q4 2023',
      color: 'green',
      title: 'Updates to Dashboard',
      owner: 'Ice Fruit',
      avatar: 'https://img.freepik.com/free-psd/3d-rendering-travel-tourist_23-2149667951.jpg?w=740&t=st=1673524724~exp=1673525324~hmac=ac9807c1b67f77dfe2f56537cfe986105571abec72fd33f3f340c4f3a3a60dc5',
      status: 'Ready to Start',
      priority: 2,
      progress: 0,
      description: "Ice Fruit Ticket",
      timestamp: '2022-04-15T12:14:11'
    },
    {
      category: 'Q4 2023',
      color: 'green',
      title: 'Build Saas product',
      owner: 'HyperX47',
      avatar: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1673524495~exp=1673525095~hmac=c1a9c5b223c3c7597f433bf62fa0015b828cf82d9f6f448718baef4f80ae15aa',
      status: 'In-Progress',
      priority: 4,
      progress: 80,
      description: "To build a SaaS product of CRM category",
      timestamp: '2022-04-15T12:14:11'
    }
  ]

  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,255,255)'
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
  ]

  useEffect(() => {
    setCategories(uniqueCategories)
  }, [])

  /* var dt = 'outer'
  const test = () => {
    var dt = 'inner'
    console.log(this.dt)
  } */

  const create_UUID = () => {    
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
  }

  return (
    

    <div className='p-5 w-full'>
      {/* <h1>My Projects</h1> */}
      <div className='ticket-container h-[80vh] overflow-scroll'>
        {/* <TicketCard /> */}
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => {
          return (
            <div key={create_UUID()}>
              <h3>{uniqueCategory}</h3>
              {tickets.filter(ticket => ticket.category === uniqueCategory).map((filteredTicket, ticketIndex) => (
                <TicketCard 
                  id={ticketIndex}
                  color={colors[categoryIndex] || colors[0]}
                  ticket={filteredTicket}
                  key={create_UUID()}
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