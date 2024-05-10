const { request, response } = require("express")
const modelUser = require("../models/index").user
const Op = require('sequelize').Op
const md5 = require(`md5`)
const jsonwebtoken = require("jsonwebtoken")
const SECRET_KEY = "secretcode"

exports.login = async (request, response) => {
    try{
        const params = {
            nuptk: request.body.nuptk,
            password: md5(request.body.password),
        };

        const findUser = await modelUser.findOne({where:params});
        if (findUser == null){
            return response.status(404).json({
                message: "email or password doesn't match",
                err: error,
            });
        }
        let tokenPayload = {
            id: findUser.id,
            nuptk: findUser.nuptk,
        };
        tokenPayload = JSON.stringify(tokenPayload);
        let token =  jsonwebtoken.sign(tokenPayload, SECRET_KEY);
        
        return response.status(200).json({
            message: "success login",
            data: {
                token: token,
                id: findUser.id,
                nuptk: findUser.nuptk,
            },
        });
    }
    catch(error){
        return response.status(500).json({
            message: "internal error",
            err: error,
        });
    }
};

exports.addUser = async (request, response) => {
    let newUser = {
        name: request.body.name,
        nuptk: request.body.nuptk,
        password: md5(request.body.password),
    };
    if(newUser.name === ""|| newUser.nuptk === ""|| newUser.password === ""){
        return response.json({
            success: false,
            message: "All data must be filled in!"
        });
    }try{
        const existingNuptk = await modelUser.findOne({
            where: {nuptk: newUser.nuptk},
        });
        if(existingNuptk){
            return response.json({
                success: false,
                message: "NUPTK is already in use",
            })
        }
        const result = await modelUser.create(newUser);
        return response.json({
            success: true,
            name: result.name,
            nuptk: result.nuptk,
            message: `User has been added`
        });
    }catch(error){
        return response.json({
            success: false,
            message: error.message,
        })
    }
}