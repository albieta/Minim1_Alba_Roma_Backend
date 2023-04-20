import { PaginateModel, Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { Organization } from "../interfaces/organization.interface";

interface PaginatedOrganizationModel<T> extends PaginateModel<T> {};

const OrganizationSchema = new Schema<Organization>(
    {
        name:{
            type: String,
            required:true,
        },
        website:{
            type: String,
        },
        advertisers:{
            type: [Schema.Types.ObjectId],
            ref:'users',
          },
        email:{
            type: String,
            required:true,
            unique: true,
        },
        password:{
            type: String,
            required:true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

OrganizationSchema.plugin(mongoosePaginate);

const OrganizationModel: PaginatedOrganizationModel<Organization> = model<Organization, PaginatedOrganizationModel<Organization>>('organizations', OrganizationSchema);

export default OrganizationModel;