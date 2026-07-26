import mongoose  from "mongoose";
import dotenv from 'dotenv'
dotenv.config();


const connectDB=async()=>{
     try{
         await mongoose.connect(`${process.env.DB_URL}`)
         console.log(`\n MongoDB connected!! DB HOST:${mongoose.connection.host}`)
     }catch(error){
        console.log("MongoDB connection error",error)
        process.exit(1)
     }
}

export default connectDB;