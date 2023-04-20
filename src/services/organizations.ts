import { Types } from "mongoose";
import { Organization } from "../interfaces/organization.interface";
import OrganizationModel from "../models/organization";

const getOrganization = async(id: string) => {
    const responseItem = await OrganizationModel.findOne({_id: id});
    return responseItem;
};

const getOrganizations = async(page: number, limit: number) => {
    const options = {
        page: page,
        limit: limit
    };
    const responseItem = await OrganizationModel.paginate({}, options);
    return responseItem;
};

const postOrganization = async(item: Organization) => {
    const responseInsert = await OrganizationModel.create(item);
    return responseInsert;
};

const updateOrganization = async (id: string, data: Organization) => {
    const responseItem = await OrganizationModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
}

const deleteOrganization = async(id: string) => {
    const responseItem = await OrganizationModel.findOneAndRemove({_id: id});
    return responseItem;
}

const addAdvertiser = async(idOrg: string, idUser: string) => {
    const responseInsert = await OrganizationModel.findOneAndUpdate(
        {_id: idOrg},
        {$addToSet: {advertisers: new Types.ObjectId(idUser)}},
        {new: true}
    ); // ).populate('advertisers');
    return responseInsert;
};

const deleteAdvertiser = async(idOrg: string, idUser: string) => {
    const deleteResponse = await OrganizationModel.findOneAndUpdate(
        {_id: idOrg},
        {$pull: {advertisers: new Types.ObjectId(idUser)}},
        {new: true}
    );
    console.log(deleteResponse);
    return deleteResponse;
}

export { getOrganization, getOrganizations, postOrganization, updateOrganization, deleteOrganization, addAdvertiser, deleteAdvertiser };

