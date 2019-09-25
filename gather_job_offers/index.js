const mongoose = require('mongoose');
const getJoobleOffers = require('./3rd_party_api/jooble/index');
const scrapeSite = require('./scrapers/scraper_function/index');

//Get jobs from jooble
 getJoobleOffers('junior developer', 'Warszawa', (data)=> {
	//console.log(data)

})

//Get jobs from pracuj pl
const settingsPracujpl =  {
	siteUrl: 'https://www.pracuj.pl',
	keywords: ['junior', 'front', 'end'],
	location: 'warszawa',
	jobListingContainersSelector: '.results__list-container-item .offer-details__title-link',

	//Site selectors, used to get information from dom individual ofer and parse those to object keys
	offerDOMSelectors: {
		jobTitleSelector: '#offerTitle',
		datePostedSelector: 'span[itemprop="datePosted"]',
		employerSelector: '#offerEmployer',
		addressSelector: 'span[itemprop="addressRegion"]',
	},

	searchUrl: function() {
		//Uses previously supplied data to create a search link
		return `https://www.pracuj.pl/praca/${this.keywords.join("%20")};kw/${this.location};wp`
	} 
}

scrapeSite(settingsPracujpl, (data)=> {
	//console.log(data)
})

