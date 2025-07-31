const CrudRepositories = require('./crud.repo');

const {Airport} = require('../models')

class AirportRepository extends CrudRepositories{
constructor(){
    super(Airport)
}
}

module.exports = AirportRepository;