import Scoreboard from '@/components/scoreboard'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";


export default function Home() {

  return (
    <main className='relative items-center overflow-hidden '>

        <h1 className='text-[7rem] font-bold mx-auto text-center mt-[150px] animate-text bg-gradient-to-r from-cyan-500 via-[#2ebf91] to-blue-500 bg-clip-text text-transparent'>Popule</h1>
        <h2 className='text-[2rem] mx-auto text-center text-zinc-400 mb-[100px]'>Can you guess the correct country?</h2>
        <Image className='object-contain absolute top-[120px] left-0 right-0 mx-auto width-[700px] brightness-[60%]' alt='map' height={700} width={700} src='/map.png'/>

        <div className='flex justify-center'>
          <button className='mx-[15px]'>
            <Link href="https://github.com/txriq03/Popule" target='_blank' className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-teal-500 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-teal-500 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-teal-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Github <ArrowTopRightOnSquareIcon className="inline ml-[5px] h-6 w-6" /></span>
            </Link>
  
          </button>
        
          <button className='mx-[15px]'>
            <Link href="/game" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-sky-500 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-sky-500 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-sky-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Play game</span>
            </Link>
          </button>
        </div>

        <Scoreboard/>

    </main>
  )
}
