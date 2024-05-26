// services/cityService.js

import axios from 'axios';
import {responseObject} from "../utils/responseObject";
import {GetCityType, ResponseObjectType} from "../types/types";
import {env} from "../main";

class CityService {
    static async getCitiesByZipcode(zipcode:string):Promise<ResponseObjectType<GetCityType>> {
        try {
            const response = await axios.get(`${env.GEO_API}${zipcode}`);
            const cities = response.data.map((city: { nom: string; }) => city.nom);
            return responseObject<GetCityType>(false,undefined,{cities:cities});
        } catch (error) {
            console.error(error);
            return responseObject(true,'Error fetching data from API');
        }
    }
}

export default CityService;
