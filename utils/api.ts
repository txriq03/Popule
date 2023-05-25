import axios from 'axios';
import * as cheerio from 'cheerio';
import { utils } from './index'

export const getData = async (setFirstCountry: any, setSecondCountry: any, setPopulation: any, setSecondPopulation: any) => {
	const { data: firstData } = await axios.get(`https://worldpopulationreview.com/countries/${utils.getFirstRandomCountry(utils.countries, setFirstCountry)}-population`);
	const { data: secondData } = await axios.get(`https://worldpopulationreview.com/countries/${utils.getSecondRandomCountry(utils.countries, setSecondCountry)}-population`);
	const $ = cheerio.load(firstData)
	setPopulation(parseInt($('.center span').text().replace(/,/g, '')))

	const $s = cheerio.load(secondData)
	setSecondPopulation(parseInt($s('.center span').text().replace(/,/g, '')))
}