import React from 'react'
import Image from './Image'

import Scissors from '../assets/icon-scissors.svg'
import Paper from '../assets/icon-paper.svg'
import Rock from '../assets/icon-rock.svg'
import Lizard from '../assets/icon-lizard.svg'
import Spock from '../assets/icon-spock.svg'

const MyPick = ({label, choice}) => {
  const imageSrc = {
    Rock: Rock,
    Paper: Paper,
    Scissors: Scissors,
    Lizard: Lizard,
    Spock: Spock,
  }

  const backClr = {
    Rock: 'border-rose-800',
    Paper: 'border-blue-500',
    Scissors: 'border-yellow-500',
    Lizard: 'border-purple-600',
    Spock: 'border-sky-400',
  }
  

  return (
    <div>
      <div className='flex justify-between items-center gap-8 flex-col'>
        <div>
          <h2 className='text-lg font-semibold text-white mb-6 uppercase'>{label}</h2>
        </div>
        <div className={`
        cursor-pointer 
        hover:transform 
        hover:scale-110 
        transition 
        bg-white 
        border-[15px] 
        rounded-full 
        p-8 md:w-[200px] 
        md:h-[200px] 
        lg:w-[250px] 
        lg:h-[250px]
        ${backClr[choice]}`}>
          <Image src={imageSrc[choice]}/>
        </div>
      </div>
    </div>
  )
}

export default MyPick