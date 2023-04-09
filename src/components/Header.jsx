import React from 'react'
import LogoBonus from '../assets/logo-bonus.svg'

const Header = ({score}) => {
    return (
        <div className='flex w-[800px] justify-center'>
            <div className='flex justify-between w-[80vw] items-center border-2 rounded-xl border-slate-500 py-2 px-4'>
                <div className='flex'>
                    <div className='flex justify-center items-center'>
                        <img className='w-full h-full' src={LogoBonus} alt="Bonus" />
                    </div>
                </div>

                <div className='border-2 rounded-md px-8 py-2 flex flex-col justify-center items-center text-sky-900 bg-white'>
                    <h3 className='text-lg font-semibold'>SCORE</h3>
                    <span className='text-5xl font-bold '>{score}</span>
                </div>
            </div>
        </div>
    )
}

export default Header