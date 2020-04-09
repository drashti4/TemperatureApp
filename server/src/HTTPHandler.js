const nodeFS = require('./node-fs');
let objFS = new nodeFS();
const STATUS_NOT_FOUND = 203;
const COUNTRIES_FILE = 'countries.json';

function getAllCountries(request, response){
    const data = objFS.readFrom(COUNTRIES_FILE);
    response.json(Object.keys(data));
}

function getAllCitiesByCountryName(request, response){
    const data = objFS.readFrom(COUNTRIES_FILE);
    if(!request.params.country ){
        response.status(STATUS_NOT_FOUND).json({
            errorCode: STATUS_NOT_FOUND,
            msg: 'You are missing parameter'
        });
    }
    response.json(data[request.params.country]);
}

module.exports = {
    getAllCountries,
    getAllCitiesByCountryName
};