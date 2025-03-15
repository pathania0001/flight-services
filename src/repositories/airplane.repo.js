import { Airplane } from "../models/index.js";
import CrudRepositories from "./crud.repo.js";

// console.log("inside-airplane-repo")
class AirplaneRepository extends CrudRepositories{  
    constructor() {
        super(Airplane)
    }
}

export  {AirplaneRepository};