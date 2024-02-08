import validator from 'indicative/validator.js';
import { alertStatusJson } from './Utils/JsonResponse.js';
import UserModel from '../Models/UserModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) =>{

    const {email, password} = req.body;
    return res.json(alertStatusJson(true, 'success', null));
    // Verify User
    const findUser = await UserModel.findOne({email});
    if (!findUser){
        return res.json(alertStatusJson(false, 'email_not_found', null));
    }

    
    // verify password
    const verifyPassword = bcrypt.compareSync(password, findUser.password);
    if (!verifyPassword){
        return res.json(alertStatusJson(false, 'wrong_password', null));
    }

    
    // sent jwt
    const jwt_secret = process.env.JWT_SECRET;
    const access_token = jwt.sign({name:findUser.name, id:findUser._id}, jwt_secret);

    res.cookie("assess_token", access_token, {httpOnly: true});

    return res.json(alertStatusJson(true, 'success', null));
};

export const register = async (req, res) => {

    const {name, email, password} = req.body;
    const findUser = await UserModel.findOne({email});

    if (findUser){
        return res.json(alertStatusJson(false, 'email_exist', null));
    }

    validator.validateAll(req.body, {
        name: 'required',
        email: 'required|email',
        password: 'required|min:6|max:30'
    }).then( async () => {

        const salt = bcrypt.genSaltSync(10); // decaly encode method
        const hashedPass = bcrypt.hashSync(password, salt);

        // Data insert
        const createdUser = await UserModel.create({
            name, 
            email,
            password: hashedPass,
        })

        // sent jwt
        const jwt_secret = process.env.JWT_SECRET;
        const access_token = jwt.sign({name, id:createdUser._id}, jwt_secret);

        res.cookie("assess_token", access_token, {httpOnly: true});

        return res.json(alertStatusJson(true, 'success', null));
       
    }).catch((err) => {

        return res.json(alertStatusJson(false, 'validation_error', err));

    });
};