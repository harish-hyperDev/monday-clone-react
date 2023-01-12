import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/ticket' element={<TicketPage />}/>
          <Route path='/ticket/:id' element={<TicketPage editMode={true} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
