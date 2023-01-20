import React from 'react'

const PriorityDisplay = ({ priority }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center [&>*]:m-1 [&>*]:p-1'>
        <h3 style={{color: priority >= 1 ? 'rgb(253,253,150' : ''}}>★</h3>
        <h3 style={{color: priority >= 2 ? 'rgb(253,253,150' : ''}}>★</h3>
        <h3 style={{color: priority >= 3 ? 'rgb(253,253,150' : ''}}>★</h3>
        <h3 style={{color: priority >= 4 ? 'rgb(253,253,150' : ''}}>★</h3>
        <h3 style={{color: priority >= 5 ? 'rgb(253,253,150' : ''}}>★</h3>
      </div>
    </div>
  )
}

export default PriorityDisplay