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
            const data = JSON.parse(response)
            callback(data)
        })
        .catch(error=> {
            //eval(require('locus'))
            console.log(`######Error occured#######`)
            console.log(Object.keys(error))
            console.log(error.statusCode)
            console.log(error)
        })
    
}

module.exports = getJoobleOffers


