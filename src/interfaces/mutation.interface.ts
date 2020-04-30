import { Document } from "mongoose";

export interface Mutation extends Document {
    readonly mutation: boolean;
    readonly createdAt: Date;
}
