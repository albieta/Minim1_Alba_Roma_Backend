import {  Schema, model, PaginateModel } from "mongoose";
import { User } from "../interfaces/user.interface";
import mongoosePaginate from "mongoose-paginate-v2";

interface PaginatedUserModel<T> extends PaginateModel<T> {}

const UserSchema = new Schema<User>(
    {
        name:{
            type: String,
            required:true,
        },
        surname:{
            type: String,
            required:true,
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
        role:{
            type: String, 
            enum: ["admin", "need", "help"],
            required:true,

        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

UserSchema.plugin(mongoosePaginate);


const UserModel: PaginatedUserModel<User> = model<User, PaginatedUserModel<User>>(
    "users",
    UserSchema
);

export default UserModel;