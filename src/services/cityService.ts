// services/cityService.js

import axios from 'axios';

class CityService {
    static async getCitiesByZipcode(zipcode:any) {
        try {
            const response = await axios.get(`https://geo.api.gouv.fr/communes?codePostal=${zipcode}`);
            const cities = response.data.map((city: { nom: any; }) => city.nom);
            return { success: true, cities };
        } catch (error) {
            console.error(error);
            return { success: false, error: 'Error fetching data from API' };
        }
    }
}

export default CityService;
