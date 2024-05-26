import {num, str} from "envalid";

export const envValidation={
    PORT: num(),
    GEO_API:str()
}