const requestPromise =  require('request-promise');


//const searchParamsEcample = "{ keywords: 'junior developer', location: 'Warszawa'}"

const getJoobleOffers = (searchKeywords, location, callback)=> {
    const apiKey = '2d77b5f0-0191-4412-aa48-5aeb10680010';
    const joobleAPiUrl = `http://pl.jooble.org/api/${apiKey}`;
    const searchParams = `{ keywords: '${searchKeywords}', location: '${location}'}`

    const options ={
        method: "POST",
        uri: joobleAPiUrl,
        body: searchParams
    }


    
    requestPromise(options)
        .then(response => {
            const data = JSON.parse(response);
            const dataUnified = data.jobs.map(offerObject => {
                return {
                    jobTitle: offerObject.title,
                    datePosted: offerObject.updated,
                    jobUrl: offerObject.link,
                    employer: offerObject.company,
                    address: offerObject.location,
                    employer_opinion: 'test'
                }
            })

            callback(dataUnified)
        })
        .catch(error=> {
            //eval(require('locus'))
            console.log(`######Error occured in Jooble#######`)
            console.log(error)
        })
    
}

module.exports = getJoobleOffers


