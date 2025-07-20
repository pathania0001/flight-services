const CrudRepositories = require('./crud.repo');

const {City} = require('../models')

class CityRepository extends CrudRepositories{
constructor(){
    super(City)
}
}

module.exports = CityRepository;