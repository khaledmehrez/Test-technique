import {isValidNumber} from "../utils/isValidNumber";

class CityValidator{
    static validateGetCity(zipCode:string | undefined,res:any){
        if(!zipCode){
            return res.json({ success: false, error: 'Missing zipcode' });
        }
        if(typeof zipCode !== 'string'){
            return res.json({ success: false, error: 'Zipcode must be s string' });
        }

        if(!isValidNumber(zipCode)){
            return res.json({ success: false, error: 'Zipcode is invalid' });
        }


    }
}

export default CityValidator