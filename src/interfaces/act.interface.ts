import { Auth } from "./auth.interface";

export interface Act {
    title: string;
    location: string;
    organization: string;
    need_time: string;
    help_time: string;
    need_description: string; 
    help_description: string;
    need_requirements: string;
    help_requirements:string;
    need_tag: string; 
    help_tag: string;
    assistance: "yes" | "no";
}