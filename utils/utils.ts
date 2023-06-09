export const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
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
	"Colombia",
	"Comoros",
	"Dr Congo",
	"Cook Islands",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
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
	// "Guinea-Bissau",
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
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"South Korea",
	"North Korea",
	"Kuwait",
	"Kyrgyzstan",
	"Latvia",
	"Lebanon",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
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
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"North Macedonia",
	"Romania",
	"Rwanda",
	"Réunion",
	"Saint Barthelemy",
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
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
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
	"British Virgin Islands",
	"United States Virgin Islands",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Aland Islands"
];

export const countries = countryList.map(element => element.replace(/ /g, '-'))

export const getFirstRandomCountry = (array: string[], setFirstCountry: any) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    setFirstCountry(array[randomIndex].replace(/-/g, ' '))
    return array[randomIndex].toLowerCase();
};

export const getSecondRandomCountry = (array: string[], setSecondCountry: any) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    setSecondCountry(array[randomIndex].replace(/-/g, ' '))
    return array[randomIndex].toLowerCase();		
};

export const checkAnswer = (population: string, secondPopulation: string, answer: any) => {
	if (answer == 'left') {
		if (population >= secondPopulation) {
			console.log('Correct!')
			return true
		} else {
			console.log('Incorrect!')
			return false
		}
	} else if (answer == 'right') {
		if (secondPopulation >= population) {
			console.log('Correct!')
			return true
		} else {
			console.log('Incorrect!')
			return false
		}
	}
}

export const randomPopData = async (jsonData: object, setFirstCountry: any, setSecondCountry: any, setFirstPop: any, setSecondPop: any) => {
	const values = Object.values(jsonData)
	const randomIndex = Math.floor(Math.random() * values.length);
	const randomValue = values[randomIndex];

	values.splice(randomIndex, 1)

	let randomIndex1;
	let randomValue1;

	do {
		randomIndex1 = Math.floor(Math.random() * values.length);
		randomValue1 = values[randomIndex1];
	  } while (randomIndex1 === randomIndex);


	// const randomIndex1 = Math.floor(Math.random() * values.length);
	// const randomValue1 = values[randomIndex];

	
	setFirstCountry(randomValue.country)
	console.log(randomValue.country)
	setFirstPop(randomValue.pop2023)	

	setSecondCountry(randomValue1.country)
	setSecondPop(randomValue1.pop2023)

}