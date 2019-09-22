
const getJoobleOffers = require('./3rd_party_api/jooble/index');

getJoobleOffers('junior developer', 'Warszawa', (data)=> {
    console.log(data)
})