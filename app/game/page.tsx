'use client'
import axios from 'axios';
import * as cheerio from 'cheerio';
import { useEffect, useState} from 'react';

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia",
	"Bonaire",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands",
	"Central African Republic",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands",
	"Colombia",
	"Comoros",
	"Congo",
	"Cook Islands",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands",
	"Faroe Islands",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories",
	"Gabon",
	"Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea",
	"Korea",
	"Kuwait",
	"Kyrgyzstan",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia",
	"Moldova",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"North Macedonia",
	"Romania",
	"Russian Federation",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"United States Minor Outlying Islands",
	"United States",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Vatican city",
	"Venezuela",
	"Vietnam",
	"Virgin Islands",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];


const countries = countryList.map(element => element.replace(/ /g, '-'))
const params = {
	headers: {
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
	}
}

const Game = () => {
    const [population, setPopulation ] = useState<string | null>('loading...');
	const [secondPopulation, setSecondPopulation] = useState<string | null>('loading...');
    const [firstCountry, setFirstCountry ] = useState<string | null>('');
    const [secondCountry, setSecondCountry ] = useState<string | null>('');


    const getFirstRandomCountry = (array: string[]) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        setFirstCountry(array[randomIndex].replace('-', ' '))
        return array[randomIndex].toLowerCase();
    };

	const getSecondRandomCountry = (array: string[]) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        setSecondCountry(array[randomIndex].replace('-', ' '))
        return array[randomIndex].toLowerCase();		
	};

    const getData = async () => {
        const { data: firstData } = await axios.get(`https://worldpopulationreview.com/countries/${getFirstRandomCountry(countries)}-population`);
        const { data: secondData } = await axios.get(`https://worldpopulationreview.com/countries/${getSecondRandomCountry(countries)}-population`);
		const $ = cheerio.load(firstData)
        setPopulation($('.center span').text())

		const $s = cheerio.load(secondData)
		setSecondPopulation($s('.center span').text())
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <main className='text-white'>
		<div className="bg-[url('/forest2.jpg')] brightness-[50%] blur-sm bg-center h-[100%] w-[50%] fixed z-[1] top-0 left-0 overflow-x-hidden "/>
		<div className='bg-transparent z-[2] h-[100%] w-[50%] fixed top-0 left-0 overflow-x-hidden pt-[20px]'>

			<h2 className=' text-[5rem] text-center mt-[100px]'>
				{firstCountry} 
			</h2>
			<h3 className='text-[3rem] text-center mt-[10px]'>
				{population}
			</h3>
		</div>
		<div className="bg-[url('/forest.jpg')] bg-bottom bg-transparent brightness-[50%] blur-sm h-[100%] w-[50%] fixed z-[1] top-0 right-0 overflow-x-hidden pt-[20px]"/>
		<div className='bg-transparent z-[2] h-[100%] w-[50%] fixed top-0 right-0 overflow-x-hidden pt-[20px]'>

			<h2 className='text-[5rem] text-center mt-[100px] mx-[5px]'>
				{secondCountry} 
			</h2>
			<h3 className='text-[3rem] text-center mt-[10px]'>
				{secondPopulation}
			</h3>
		</div>
		<div className='bg-white z-[2] text-black h-[100px] w-[100px] rounded-full absolute top-[50%] left-0 right-0 mx-auto text-center'>
			<p className='mt-[15px] text-[3rem]'>OR</p>
		</div>
    </main>
  )
}

export default Game