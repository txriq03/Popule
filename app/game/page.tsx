'use client'
import { useEffect, useState} from 'react';
import { utils } from '../../utils'
import { XMarkIcon } from "@heroicons/react/24/outline";
import dynamic from 'next/dynamic';
import popData from '../../JSON/countries-table.json';
import Link from 'next/link';
import GameOver from '@/components/GameOver'

const MyOdometer = dynamic(
    () => import('../../components/MyOdometer'), {
		ssr: false,
		loading: () => <p>0</p>
	}
  )

const Game = () => {
    const [firstPopulation, setFirstPopulation ] = useState<string>('loading...');
	const [secondPopulation, setSecondPopulation] = useState<string>('loading...');
    const [firstCountry, setFirstCountry ] = useState<string | null>('');
    const [secondCountry, setSecondCountry ] = useState<string | null>('');
	const [answer, setAnswer] = useState<null | string>(null);
	const [streak, setStreak] = useState<number>(0);

	const handleCorrect = () => {
		setStreak(streak + 1)
		setAnswer(null)
		utils.randomPopData(popData, setFirstCountry, setSecondCountry, setFirstPopulation, setSecondPopulation)
	}

    useEffect(() => {
		utils.randomPopData(popData, setFirstCountry, setSecondCountry, setFirstPopulation, setSecondPopulation)
    }, [])

	useEffect(() => {
		utils.checkAnswer(firstPopulation, secondPopulation, answer) && handleCorrect()
	}, [answer])

  return (
    <main className='text-white'>
		<div className="bg-[url('/forest2.jpg')] brightness-[50%] blur-sm bg-center h-[100%] w-[50%] fixed z-[1] top-0 left-0 overflow-x-hidden max-lg:h-[50%]  max-lg:w-[100%] "/>
		<div onClick={() => {setAnswer('left')}} className='bg-transparent z-[2] h-[100%] w-[50%] fixed top-0 left-0 overflow-x-hidden max-lg:h-[50%]  max-lg:w-[100%] overflow-hidden'>
			<h2 className=' text-[5rem] max-md:text-[4rem] text-center mt-[200px] max-lg:mt-[0px] max-lg:py-[150px] mx-[10px] max-lg:align-middle '>
				{firstCountry} 
			</h2>
			{/* <h3 className='text-[3rem] max-md:text-[2rem] text-center mt-[10px] font-bold max-lg:mb-[100px]'>
				{firstPopulation.toLocaleString()}
			</h3> */}
		</div>

		<div className="bg-[url('/forest.jpg')] bg-bottom brightness-[50%] blur-sm h-[100%] w-[50%] fixed z-[1] top-0 right-0 overflow-x-hidden max-lg:h-[50%] max-lg:w-[100%] max-lg:top-[50%] "/>
		<div onClick={() => {setAnswer('right')}} className='bg-transparent z-[2] h-[100%] w-[50%] fixed top-0 right-0 overflow-x-hidden max-lg:h-[50%] max-lg:w-[100%] max-lg:top-[50%] overflow-hidden '>
			<h2 className='text-[5rem] max-md:text-[4rem] text-center mt-[200px] mx-[10px] max-lg:mt-[0px] max-lg:py-[150px] max-lg:align-middle  '>
				{secondCountry} 
			</h2>
			{/* <h3 className='text-[3rem] max-md:text-[2rem] text-center mt-[10px] font-bold max-lg:mb-[100px]'>
				{secondPopulation.toLocaleString()}
			</h3> */}
		</div>

		{streak === 0 ? 
			<div className='bg-white z-[2] text-black h-[100px] w-[100px] 3xl:h-[150px] 3xl:w-[150px] rounded-full absolute top-[50%] translate-y-[-50%] origin-center left-0 right-0 mx-auto text-center'>
				<p className='mt-[15px] text-[3rem] 3xl:text-[4rem] 3xl:mt-[28px]'>OR</p>
			</div>
			:
			<>
				{(utils.checkAnswer(firstPopulation, secondPopulation, answer) || answer === null) ? 
				<div className='bg-emerald-500 z-[5] text-white h-[100px] w-[100px] 3xl:h-[150px] 3xl:w-[150px] rounded-full absolute top-[50%] translate-y-[-50%] left-0 right-0 mx-auto text-center'>
					<h2 className=" mx-[10px] mt-[13px] text-white text-[3rem] 3xl:text-[5rem] 3xl:ml-[15px] 3xl:mt-[15px]">
						<MyOdometer value={streak} duration={1000}/>
					</h2>
				</div>
				:
				<GameOver streak={streak} setStreak={setStreak}/>
				}
			</>
		}
    </main>
  )
}

export default Game