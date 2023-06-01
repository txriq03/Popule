import Link from 'next/link'

const GameOver = ({streak, setStreak}: any) => {
  return (
    <>
        <div className='absolute z-[5] bg-rose-500 h-[100vh] w-[100vw]'/>
        <h1 className='absolute z-[6] text-[3rem] mx-auto top-[30%] left-[50%] translate-x-[-50%] font-semibold whitespace-nowrap'>You Scored</h1>
        {/* <div className='bg-rose-500 z-[6] text-white h-[250px] w-[250px] 3xl:h-[350px] 3xl:w-[350px] rounded-full absolute top-[50%] translate-y-[-50%] left-0 right-0 mx-auto text-center'>
            <XMarkIcon className=" mx-[10px] mt-[10px] text-white 3xl:ml-[15px] 3xl:mt-[15px] " />
        </div> */}
        <p className='absolute z-[6] text-[10rem] top-[35%] left-[50%] translate-x-[-50%] text-center font-bold'>
            {streak}
        </p>

        <button onClick={() => setStreak(0)} className='absolute z-[6] text-rose-600 font-bold bg-white rounded-[5px] shadow-lg top-[65%] left-[50%] translate-x-[-50%] w-[200px] cursor-pointer hover:bg-gray-200 transition-all duration-200  '>
            <p className='my-[5px] mx-auto text-xl text-center'>
                Play Again
            </p>
        </button>
        <button className='absolute z-[6] text-rose-600 font-bold bg-white rounded-[5px] shadow-lg top-[71%] left-[50%] translate-x-[-50%] w-[200px] cursor-pointer hover:bg-gray-200 transition-all duration-200 '>
            <Link href='/'>
                <p className='my-[5px] mx-auto text-xl text-center'>
                    Quit
                </p>
            </Link>
        </button>
    </>
  )
}

export default GameOver