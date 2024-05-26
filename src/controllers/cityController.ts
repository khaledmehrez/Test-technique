import CityService from "../services/cityService";
import CityValidator from "../Validators/cityValidator";

class CityController {
    static async getCities(req:any, res:any) {
        const zipcode = req.query.zipCode;
        CityValidator.validateGetCity(zipcode,res)


        const result = await CityService.getCitiesByZipcode(zipcode);
        return res.json(result);
    }
}

export default CityController;


