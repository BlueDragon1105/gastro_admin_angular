import config from "../config/config";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import ApiError from '../helpers/apierror';

export const login = (req, res, next) => {
    const { email, password } = req.body;
    let user = {email: email};
    if(email !== process.env.admin_email) {
        res.status(400).send({
            message: 'User does not exist'
        });
    } else if(password !== process.env.admin_password) {
        res.status(400).send({
            message: 'Password is wrong!'
        });
    } else {
        // Email and Password match
        const token = jwt.sign({
            email: email,
        }, config.jwtSecret);
        console.log('token', token);
        res.json({ token, user });
    }
};
