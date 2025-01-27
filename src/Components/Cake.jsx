import React from 'react'

const Cake = (props) => {
  return (
    <div className='mb-4 p-5 flex flex-col border-2 border-red-400  rounded font-bold '>
        <p><span className='text-black-900'>Name:</span>{' '}
        <span className='text-rose-400'>{props.name}</span></p>
        <p><span className='text-black-900'>Price:</span>{' '}
        <span className='text-rose-400'>{props.price}</span></p>
        <p><span className='text-black-900'>Description:</span>{' '}
        <span className=' underline text-red-600'>{props.description}</span></p>
    </div>
    
  )
}

export default Cake