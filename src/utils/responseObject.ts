import {ResponseObjectType} from "../types/types";

export function responseObject<T>(isError:boolean,errorMessage?:string,data?:T):ResponseObjectType<T>{

    if(isError){
        return { success: false, error: errorMessage }
    }
    else{
        return { success: true, ...data };
    }
}