import { Request, } from 'express';

export interface GetCityType {
    cities:string[]
}

export type ResponseObjectType<T> = {
    success: boolean;
    error?: string;
    data?: T;
};

export interface getCitiesRequestType extends Request{
    query: {
        zipCode: string;
    };
}