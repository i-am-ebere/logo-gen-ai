import {Request} from "express";

export interface ImageRequest extends Request {
    body: {
        companyName?: string
        companySector?: string
    }
}
