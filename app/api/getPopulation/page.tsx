
import * as cheerio from 'cheerio';
import axios from 'axios';
const url =  "https://worldpopulationreview.com/countries/united-kingdom-population"

const getHTML = async () => {
    const { data: html } = await axios.get(url);
    return html;
};

getHTML().then((res) => {
    const $ = cheerio.load(res);
    const $s = $('.center span').text()
    console.log($s)
})

export default getHTML