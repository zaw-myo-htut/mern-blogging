import express from "express";
import dotenv from "dotenv";
import AuthRouter from "./Routes/AuthRoute.js";
import mongoose from "mongoose";
import UserModel from "./Models/UserModel.js";

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

app.get('/test', async (req, res) => {
    // await UserModel.create({
    //     name: 'Zaw Myo Htut',
    //     email: 'Zaw@gamil.com',
    //     password: 'password'
    // });

    // res.json('created');
    // return;

    const data = await UserModel.find({});
    res.json(data);
})

// Router Middleware
app.use(AuthRouter);