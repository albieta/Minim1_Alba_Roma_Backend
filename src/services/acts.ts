import { Act } from "../interfaces/act.interface";
import ActsModel from "../models/act";

const insertAct = async(item: Act) => {
    const responseInsert = await ActsModel.create(item);
    return responseInsert;
};

const getAct = async(id: string) => {
    const responseItem = await ActsModel.findOne({_id: id});
    return responseItem;
};

const getAllActs = async(page: number, limit:number) => {
    const options={
        page: page,
        limit: limit
    };
    const responseItem = await ActsModel.paginate({},options);
    return responseItem;
};
const changeAct = async(id: string, data: Act) => {
    const responseItem = await ActsModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const eraseAct = async(id: string) => {
    const responseItem = await ActsModel.findOneAndRemove({_id: id});
    return responseItem;
}

export { insertAct, getAllActs, changeAct, eraseAct, getAct};

