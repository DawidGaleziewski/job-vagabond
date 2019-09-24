
const getJoobleOffers = require('./3rd_party_api/jooble/index');

// getJoobleOffers('junior developer', 'Warszawa', (data)=> {
//     console.log(data)
// })

const scrapeSite = require('./scrapers/scraper_function/index');


const settings =  {
	siteUrl: 'https://www.pracuj.pl',
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
		//Uses previously supplied data to create a search link
		return `https://www.pracuj.pl/praca/${this.keywords.join("%20")};kw/${this.location};wp`
	} 
}

scrapeSite(settings, (data)=> {
	console.log(data)
})