import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://singhvsvarun:1ga4vEeJlyR4RH1f@cluster0.zkm4zcg.mongodb.net/MedicSage').then(()=>console.log('DB connected'))
}