import { Request, Response } from "express";
import { addAdvertiser, deleteAdvertiser, deleteOrganization, getOrganization, getOrganizations, postOrganization, updateOrganization } from "../services/organizations";
import { handleHttp } from "../utils/error.handle";

const getOrg = async({params}:Request,res:Response) => {
    try {
        const {idOrg} = params;
        const response = await getOrganization(idOrg);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_ORG");
    }
};

const getOrgs = async(req:Request,res:Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const response = await getOrganizations(page, limit);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_ORGS");
    }
};

const postOrg = async({body}:Request,res:Response)=>{
    try{
        const responseOrganization=await postOrganization(body);
        res.send(responseOrganization);
    }catch(e){
        handleHttp(res,"ERROR_POST_ORG");
    }
};

const updateOrg = async({params,body}:Request,res:Response) => {
    try {
        const {idOrg} = params;
        const response = await updateOrganization(idOrg,body);
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_UPDATE_ORG");
    }
};

const deleteOrg = async({params}:Request,res:Response) => {
    try {
        const {idOrg} = params;
        const response = await deleteOrganization(idOrg);
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_DELETE_ORG");
    }
};

const addAdv = async({body}:Request,res:Response)=>{
    try{
        const {idOrg, idUser} = body;
        const responseOrganization=await addAdvertiser(idOrg, idUser);
        res.send(responseOrganization);
    }catch(e){
        handleHttp(res,"ERROR_POST_ADVERTISER");
    }
};

const deleteAdv = async({body}:Request,res:Response)=>{
    try{
        const {idOrg, idUser} = body;
        const responseOrganization = await deleteAdvertiser(idOrg, idUser);
        res.send(responseOrganization);
    }catch(e){
        handleHttp(res,"ERROR_DELETE_ADVERTISER");
    }
};

export { addAdv, getOrg, getOrgs, postOrg, updateOrg, deleteOrg, deleteAdv };

