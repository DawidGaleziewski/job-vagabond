
const $ = require('cheerio');
const puppeteer = require('puppeteer');
const offerParsePuppeteer = require('./offerParse')




//########Settings object example#######
// const settings =  {
// 	siteUrl: 'https://www.pracuj.pl',
// 	keywords: ['junior', 'front', 'end'],
// 	location: 'warszawa',
// 	jobListingContainersSelector: '.results__list-container-item .offer-details__title-link',

// 	//Site selectors, used to get information from dom individual ofer
// 	offerDOMSelectors: {
// 		jobTitleSelector: '#offerTitle',
// 		datePostedSelector: 'span[itemprop="datePosted"]',
// 		employerSelector: '#offerEmployer',
// 		addressSelector: 'span[itemprop="addressRegion"]',
// 	},

// 	searchUrl: function() {
// 		//need to understand more on why this is undefined
// 		return `https://www.pracuj.pl/praca/${this.keywords.join("%20")};kw/${this.location};wp`
// 	} 
// }


const url = 'https://nofluffjobs.com/jobs/warszawa?criteria=city%3Dwarszawa%20seniority%3Djunior%20developer';

const puppeteerScrapeSite = (settings, callback) => {
	puppeteer
		.launch()
		.then(function(browser){
			return browser.newPage();
		})
		.then(function(page){
			return page.goto(url)
				.then(function(){
					return page.content();
				})
		})
		.then(function(html){
			const offerUrls = [];

			//Stopped here
			$('a.posting-list-item', html).each(function(){
				offerUrls.push($(this)[0].attribs.href)
			});

			offerUrls.forEach( offerUrl => {
				const fullUrl = 'https://nofluffjobs.com' + offerUrl;
				//console.log(fullUrl)
				offerParsePuppeteer(fullUrl)
			})

		})
		.catch(function(err){
			console.log(err)
		})
}

module.exports = puppeteerScrapeSite;