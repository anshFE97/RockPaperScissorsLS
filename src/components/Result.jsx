import MyPick from './MyPick'

const Result = ({result, playAgain, reset, choice, housePick}) => {
  return (
    <div>
      <div className='flex gap-10 justify-center items-center'>
        <MyPick label="You Picked" choice={choice}/>

        <div className='flex flex-col gap-2 items-center'>
          <div className='mx-4'>
            <h2 className='md:text-4xl text-xl font-bold text-white'>{result}</h2>
          </div>
          <div className='flex flex-col'>
            <button
              onClick={playAgain}
            className='bg-green-500 px-8 py-2 transition rounded-md mt-5 cursor-pointer hover:opacity-80 font-semibold text-xs'>PLAY AGAIN</button>
            <button
              onClick={reset}
            className='bg-rose-500 px-8 py-2 transition rounded-md mt-5 cursor-pointer hover:opacity-80 font-semibold text-xs'>RESET</button>
          </div>
        </div>

        <MyPick label="The House Picked" choice={housePick}/>
      </div>
    </div>
  )
}

export default Result