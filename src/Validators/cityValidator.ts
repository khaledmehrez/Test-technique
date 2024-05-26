import {isValidNumber} from "../utils/isValidNumber";
import {responseObject} from "../utils/responseObject";
import {Response} from "express";

class CityValidator{
    static validateGetCity(zipCode:string | undefined,res:Response){
        if(!zipCode){
            return res.json(responseObject(true,'Missing zipcode'));
        }
        if(typeof zipCode !== 'string'){
            return res.json( responseObject(true,'Zipcode must be s string'));
        }

        if(!isValidNumber(zipCode)){
            return res.json(responseObject(true,'Zipcode is invalid'));
        }


    }
}

export default CityValidator