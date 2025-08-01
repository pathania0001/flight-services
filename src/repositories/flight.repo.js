const CrudRepositories = require("./crud.repo");

const { Flight } = require('../models') 
class FlightRepository extends CrudRepositories{
    constructor(){
        super(Flight)
    }
}

module.exports = FlightRepository;