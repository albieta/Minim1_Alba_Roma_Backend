//In charge to connect with the dB
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const insertUser = async(item: User) => {
    const responseInsert = await UserModel.create(item);
    return responseInsert;
};

const getUsers = async(page: number, limit: number) => {
    const options = {
        page: page,
        limit: limit
      };
    const responseItem = await UserModel.paginate({}, options);
    return responseItem;
};

const getUser = async(id: string) => {
    const responseItem = await UserModel.findOne({_id: id});
    return responseItem;
};

const updateUser = async(id: string, data: User) => {
    const responseItem = await UserModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteUser = async(id: string) => {
    const responseItem = await UserModel.findOneAndRemove({_id: id});
    return responseItem;
}


export { insertUser, getUser, getUsers, updateUser, deleteUser };
