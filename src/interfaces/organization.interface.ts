import { ObjectId } from "mongoose";
import { Auth } from "./auth.interface";

export interface Organization extends Auth {
    name: string;
    website?: string;
    advertisers?: ObjectId[];
}