import React from 'react'

const Footer = ({setRule}) => {
  return (
    <div className='w-full'>
        <div className='flex justify-end p-4'>
            <div 
            onClick={() => setRule(true)}
            className='
            border-2 p-2
            cursor-pointer
            hover:opacity-80
            hover:-translate-y-1
            transition
            text-white 
            font-semibold 
            rounded-md'>
            RULES
            </div>
        </div>
    </div>
  )
}

export default Footer