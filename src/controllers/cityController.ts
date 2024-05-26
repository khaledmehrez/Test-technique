import CityService from "../services/cityService";
import CityValidator from "../Validators/cityValidator";
import {getCitiesRequestType, GetCityType, ResponseObjectType} from "../types/types"
import { Response } from 'express';

class CityController {
    static async getCities(req:getCitiesRequestType, res:Response):Promise<Response<ResponseObjectType<GetCityType>>> {
        const zipcode = req.query.zipCode;
        CityValidator.validateGetCity(zipcode,res)
        const result = await CityService.getCitiesByZipcode(zipcode);
        return res.json(result);
    }
}

export default CityController;


