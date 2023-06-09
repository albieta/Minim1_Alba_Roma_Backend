import { ObjectId } from "mongoose";
import { Auth } from "./auth.interface";

export interface User extends Auth {
    name: string;
    surname: string;
    role: "admin" | "need" | "help";
    friends?: ObjectId[];
}