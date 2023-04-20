import {  Schema, model, PaginateModel } from "mongoose";
import { Friend } from "../interfaces/friend.interface";
import mongoosePaginate from "mongoose-paginate-v2";

interface PaginatedFaqModel<T> extends PaginateModel<T> {}

const FriendSchema = new Schema<Friend>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        cool: {
            type: Boolean,
            default: false
        },
        quote: {
            type: String,
        },
        estado:{
            type: String, 
            enum: ["connected", "disconnected"],
            required:true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

FriendSchema.plugin(mongoosePaginate);


const FriendModel: PaginatedFaqModel<Friend> = model<Friend, PaginatedFaqModel<Friend>>(
    "friends",
    FriendSchema
);

export default FriendModel;