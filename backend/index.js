import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try{
    await db.authenticate();
    console.log('database conected');
}catch (error){
    console.error('connection error :', error);
}

app.use(cors())//middleware cors
app.use(express.json());
app.use('/products',productRoutes);

app.listen(5000, () => console.log('server running'));