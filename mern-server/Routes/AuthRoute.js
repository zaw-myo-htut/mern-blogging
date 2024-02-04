import express from "express";
import { login } from "../Controllers/AuthController.js"
const route = express.Router();


route.get('/api/login', login);

export default route;