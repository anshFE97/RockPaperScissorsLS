import React from 'react'
import Scissors from '../assets/icon-scissors.svg'
import Paper from '../assets/icon-paper.svg'
import Rock from '../assets/icon-rock.svg'
import Lizard from '../assets/icon-lizard.svg'
import Spock from '../assets/icon-spock.svg'
import Image from './Image'


const Choices = ({setChoice}) => {
  const custom = [
    'cursor-pointer hover:transform hover:scale-110 transition absolute bg-white border-8 rounded-full p-4 w-[90px] lg:w-[110px] lg:h-[110px] h-[90px] object-contain'
  ]
  return (
    <div className=' w-[800px] flex justify-center items-center p-4 md:p-6 lg:p-8 lg:pt-12'>
      <div className='p-8 relative'>
        <div className='w-80 h-80 flex justify-center items-center'>
          <div className='choices'>
          </div>
          <div 
          onClick={() => setChoice("Scissors")}
          className={`border-yellow-500 top-0 left-2/5 transform rotate-72 ${custom[0]}`}>
            <Image src={Scissors} />
          </div>
          <div 
          onClick={() => setChoice("Spock")}
          className={`border-sky-400 top-1/4 left-10 transform -translate-x-1/2 rotate-144 ${custom[0]}`} >
            <Image src={Spock} />
          </div>
          <div 
          onClick={() => setChoice("Paper")}
          className={`border-blue-500 top-1/4 right-10 transform translate-x-1/2 rotate-216 ${custom[0]}`}>
            <Image src={Paper} />
          </div>
          <div 
          onClick={() => setChoice("Lizard")}
          className={`border-purple-600 bottom-4 left-16 transform -translate-x-1/4 rotate-72 ${custom[0]}`}>
            <Image src={Lizard} />
          </div>
          <div 
          onClick={() => setChoice("Rock")}
          className={`border-rose-800 bottom-4 right-16 transform translate-x-1/4 rotate-144 ${custom[0]}`}>
            <Image src={Rock} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Choices