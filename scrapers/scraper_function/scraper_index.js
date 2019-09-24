//Sources:
	//https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/
	
	//To do, check jak dojade api:
		//https://jakdojade.pl/public/pages/api/http_get.html

//1 Install packages:
//npm install --save request request-promise cheerio puppeteer

//2 Get raw html
const requestPromise = require('request-promise');
const $ = require('cheerio');
const offerParse = require('./offerParse');
const fs = require('fs');


//Search variables

const settings =  {
	keywords: ['junior', 'front', 'end'],
	location: 'warszawa',
	jobListingContainersSelector: '.results__list-container-item .offer-details__title-link',

	//Site selectors, used to get information from dom individual ofer
	offerDOMSelectors: {
		jobTitleSelector: '#offerTitle',
		datePostedSelector: 'span[itemprop="datePosted"]',
		employerSelector: '#offerEmployer',
		addressSelector: 'span[itemprop="addressRegion"]',
	},

	searchUrl: function() {
		//need to understand more on why this is undefined
		return `https://www.pracuj.pl/praca/${this.keywords.join("%20")};kw/${this.location};wp`
	} 
}

const scrapeSite = (settings) => {
	
	console.log(settings.searchUrl())

	// requestPromise(settings.searchUrl)
	// 	.then(function(html){
	// 		//success!
	// 		//console.log(html);
			
	// 		//3 Parsing HTML with Cheerio.js
	// 		//console.log($(containersSelector, html));
	// 		//console.log($('big > a', html));
	// 		const offerUrls = [];
	// 		const offersNumber =$(settings.jobListingContainersSelector, html).length

			
	// 		for (let i = 0; i < offersNumber; i++){
	// 			//4 filter only the links
	// 			offerUrls.push($(settings.jobListingContainersSelector, html)[i].attribs.href);
	// 		}
			
			
			
	// 		return Promise.all(
	// 			offerUrls.map(function(offerUrl){
	// 				//console.log(siteUrl + offerUrl)
	// 				return offerParse(searchUrl + offerUrl)
	// 			})
	// 		)

			
	// 	})
		
	// 	.then(function(jobOffers){
	// 		const jobOffersString = JSON.stringify(jobOffers)
	// 		//console.log(jobOffersString)
			
	// 		fs.writeFile("./jsonoutput/jobs.json", jobOffersString, function(err){
	// 			if(err){
	// 				return console.log(err)
	// 			}
				
	// 			console.log("###File was saved!###")
	// 		})
	// 	})
			
		
	// 	.catch(function(err){
	// 		//handle error
	// 		console.log(err);
	// 	});

}



  

  module.exports = scrapeSite;
