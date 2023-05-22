import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  // const getPopulation = async () => {
  //   console.log('Clicked!')

  //   const res = await fetch('http://localhost:3000/api/getPopulation')
  //   // const { $s } = await res.json()
  //   // console.log('Result: ', $s)
  // }

  return (
    <main className='relative items-center overflow-hidden '>

        <h1 className='text-[7rem] font-bold mx-auto text-center mt-[150px] animate-text bg-gradient-to-r from-cyan-500 via-[#2ebf91] to-blue-500 bg-clip-text text-transparent'>Popule</h1>
        <h2 className='text-[2rem] mx-auto text-center text-zinc-400 mb-[100px]'>Can you guess the correct country?</h2>
        <Image className='object-contain absolute top-[120px] left-0 right-0 mx-auto width-[700px] brightness-[60%]' alt='map' height={700} width={700} src='/map.png'/>

        <div className='flex justify-center'>
          <button className='bg-white border-black border-2 px-5 h-[50px] cursor-pointer mx-[15px] text-xl rounded-md '>
            Github
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
  
          </button>

          <Link href='/game' className="px-5 py-2.5 mx-[15px] mb-[100px] relative rounded group font-medium text-white inline-block">
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-green-600 to-cyan-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-green-600 to-cyan-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-green-600 to-cyan-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-green-600 from-cyan-500"></span>
            <span className="relative text-xl">Play game</span>
          </Link>
        </div>

    </main>
  )
}
