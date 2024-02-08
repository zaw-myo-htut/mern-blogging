import express from "express";
import dotenv from "dotenv";
import AuthRouter from "./Routes/AuthRoute.js";
import mongoose from "mongoose";
import UserModel from "./Models/UserModel.js";
import { alertStatusJson } from "./Controllers/Utils/JsonResponse.js";
import cookieParser from "cookie-parser";

const app = express();

// Config
dotenv.config();

// DB Setup
const mongo_url = process.env.MONGO;
mongoose.connect(mongo_url).then( () => {
    console.log('DB Connecting')
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server run in ${port}`);
});

// Middleware
app.use(express.urlencoded( {extended: false} ));
app.use(cookieParser()); //set cookie (our can use cookie)

// Router Middleware
app.use("/api", AuthRouter);


app.get('/test', async (req, res) => {
    // await UserModel.create({
    //     name: 'Zaw Myo Htut',
    //     email: 'Zaw@gamil.com',
    //     password: 'password'
    // });

    // res.json('created');
    // return;

    // const data = await UserModel.find({});
    // res.json(data);

    res.json(alertStatusJson(false, "Validate Error", [{name: "required"}]))
})

