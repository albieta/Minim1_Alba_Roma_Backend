import { ObjectId } from "mongoose";

export interface Friend {
    user: ObjectId;
    cool: boolean;
    quote?: string;
    estado: "connected" | "disonnected";
}