import React from 'react'

const ProgressDisplay = ({ progress }) => {
  return (
    <div className='min-w-[200px]'>
      <div className='w-full h-4 bg-gray-400 rounded-3xl overflow-hidden'>
        <div className='bg-green-300 h-full' style={{ width: progress + '%' }}>
          
        </div>
      </div>
    </div>
  )
}

export default ProgressDisplay