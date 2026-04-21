import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://dgmechpro200_db_user:pJSg9PlHGdsOtIjt@cluster0.jj81wpn.mongodb.net/Expense")
    .then(() => console.log("DB CONNECTED"));
}