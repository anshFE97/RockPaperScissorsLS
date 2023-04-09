import React from 'react'
import RulesList from '../assets/image-rules-bonus.svg'
import close from '../assets/icon-close.svg'

const Rules = ({setRule}) => {
  return (
    <div className='flex absolute'>
        <div className="fixed inset-0 bg-neutral-900 bg-opacity-20 z-10"/>
        <div className='bg-white px-6 py-8 rounded-md z-20 sm:relative fixed inset-0 flex flex-col justify-center items-center gap-10'>
            <div className='flex justify-between sm:gap-64'>
                <span className='text-lg font-bold'>Rules</span>
                <div 
                className='cursor-pointer hover:opacity-80 absolute bottom-10 sm:inset-0 sm:relative'
                onClick={() => setRule(false)}>
                    <img src={close} alt="closeBtn" />
                </div>
            </div>
            <div>
                <img src={RulesList} alt="rules" />
            </div>
        </div>
    </div>
  )
}

export default Rules