import React from 'react'

export default function Number ({number }) {
  return (
    <div className={ `absolute top-5 right-5 ` }>
      <div className='flex items-center gap-x-2.5'>
        <p className='text-sm font-medium text-white'>{number}</p>
        <p className='size-2 rounded-full bg-[#02DE18]'></p>
      </div>
    </div>
  )
}
