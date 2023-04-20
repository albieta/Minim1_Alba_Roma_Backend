//In charge to connect with the dB
import { Types } from "mongoose";
import { Friend } from "../interfaces/friend.interface";
import FriendModel from "../models/friend";
import UserModel from "../models/user";

const obtainFriend = async(id: string) => {
    const responseItem = await FriendModel.findOne({_id: id});
    return responseItem;
};

const insertFriend = async(item: Friend) => {
    const responseInsert = await FriendModel.create(item);
    return responseInsert;
};

const getAllFriends = async(page: number, limit: number) => {
    const options = {
        page: page,
        limit: limit,
        populate: 'user'
      };
    const responseItem = await FriendModel.paginate({}, options);
    return responseItem;
};

const getAllFriendsByUser = async(userId: string) => {
    const responseItem = await UserModel.findOne({_id: userId}).populate('friends');
    return responseItem;
};

const addFriend = async(idUser: string, idFriend: string) => {
    const responseInsert = await UserModel.findOneAndUpdate(
        {_id: idUser},
        {$addToSet: {friends: new Types.ObjectId(idFriend)}},
        {new: true}
    ); 
    return responseInsert;
};

const eliminateFriend = async(id: string) => {
    const responseItem = await FriendModel.findOneAndRemove({_id: id});
    return responseItem;
}

const changeFriend = async(id: string, data: Friend) => {
    const responseItem = await FriendModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};


export { obtainFriend, getAllFriends, getAllFriendsByUser,insertFriend, addFriend, eliminateFriend, changeFriend };
