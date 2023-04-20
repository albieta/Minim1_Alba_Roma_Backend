import { Request, Response } from "express";
import { obtainFriend, getAllFriends, getAllFriendsByUser,insertFriend, addFriend, eliminateFriend, changeFriend } from "../services/friends";
import { handleHttp } from "../utils/error.handle";

const getFriend = async({params}:Request,res:Response)=>{
    try{
        const {idFriend}=params;
        const response=await obtainFriend(idFriend);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_FRIEND");
    }
};

const getFriends = async(req:Request,res:Response)=>{
    try{
        const page = parseInt(req.query.page as string) || 1
        const limit = parseInt(req.query.limit as string) || 10;
        const response=await getAllFriends(page, limit);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_FRIENDS");
    }
};

const getFriendsOfUser = async({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await getAllFriendsByUser(idUser);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_FRIENDS");
    }
};

const postFriend = async ({body}:Request,res:Response)=>{
    try{
        const responsePerson=await insertFriend(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_FRIEND");
    }
};

const putFriend = async ({params,body}:Request,res:Response)=>{
    try{
        const {idUser, idFriend}=params;
        const response=await addFriend(idUser,idFriend);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_FRIEND");
    }
};

const deleteFriend = async ({params}:Request,res:Response)=>{
    try{
        const {idFriend}=params;
        const response=await eliminateFriend(idFriend);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_FRIEND");
    }
};

const updateFriend = async ({params,body}:Request,res:Response)=>{
    try{
        const {idFriend}=params;
        const response=await changeFriend(idFriend,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_FRIEND");
    }
};

export { getFriends, getFriend, getFriendsOfUser, postFriend, putFriend, deleteFriend, updateFriend  };
