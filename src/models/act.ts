import { Model, Schema, Types, model, PaginateModel } from "mongoose";
import { Act } from "../interfaces/act.interface";
import mongoosePaginate from "mongoose-paginate-v2";

interface PaginatedActModel<T> extends PaginateModel<T> {}

const ActSchema = new Schema<Act>(
    {
        title:{ 
            type: String,
            required:true,
        },
        location:{
            type: String,
            required:true,
        },
        help_time:{
            type: String,
            required:true,
        },
        need_time:{
            type: String,
            required:true,
        },
        organization:{
            type: String,
            required:true,
        },
        need_description:{
            type: String,
            required:false,
        },
        help_description:{
            type: String,
            required:false,
        },
        need_requirements:{
            type: String,
            required: false,
        },
        help_requirements:{
            type: String,
            required: false,
        },
        need_tag:{
            type: String,
            required: false,
        },
        help_tag:{
            type: String,
            required: false,
        },
        assistance:{
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
ActSchema.plugin(mongoosePaginate);

const ActModel: PaginatedActModel<Act> = model<Act, PaginatedActModel<Act>>('acts', ActSchema);

export default ActModel;