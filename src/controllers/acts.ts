import { Request,Response } from "express";
import { getAllActs, insertAct, changeAct, eraseAct, getAct } from "../services/acts";
import { handleHttp } from "../utils/error.handle";

const getActs=async(req:Request,res:Response)=>{
    try{
        const page=parseInt(req.query.page as string) || 1;
        const limit=parseInt(req.query.limit as string) || 10;
        const response=await getAllActs(page,limit);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_USERS");
    }
};
const getTheAct = async({params}:Request,res:Response) => {
    try {
        const {idAct} = params;
        const response = await getAct(idAct);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_ACT");
    }
};

const postAct=async ({body}:Request,res:Response)=>{
    try{
        const responseOrganization=await insertAct(body);
        res.send(responseOrganization);
    }catch(e){
        handleHttp(res,"ERROR_POST_ACT");
    }
};
const updateAct=async ({params,body}:Request,res:Response)=>{
    try{
        const {idAct}=params;
        const response=await changeAct(idAct,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_ACT");
    }
};
const deleteAct=async ({params}:Request,res:Response)=>{
    try{
        const {idAct}=params;
        const response=await eraseAct(idAct);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_ACT");
    }
};

export{getActs, postAct, updateAct, deleteAct, getTheAct};