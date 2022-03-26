const Repository = require('../repository/repositoryUser');
const {PasswordEncrypt} = require('../helpers/EncryptPassword');
const User = require('../models/User');

const GetAllUser = async(req,res) =>{
    try{
        const users = await Repository.getAll();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json(error);
    }
}

const GetById = async (req,res)=>{
   try{
    const user = await Repository.getId(req.params.id);
     res.status(200).json(user);
   }catch(error){
     res.status(500).json(error);
   }

}

const DeleteById = async(req,res)=>{
    try{
        const user = Repository.deleteUserById(req.params.id);
        res.status(200).json(user);
    }catch(error){
        res.status(500).json(error);
    }
}

const UpdateUser = async(req,res)=>{

    console.log("Controller---------"+req.body)
    const {username,email,password,profilePic} = req.body;
     if(req.body.password){
         req.body.password = await PasswordEncrypt(req.body.password);
        
     }

     try{
         const user = await Repository.updateUser(req.params.id,req.body);
          res.status(200).json(user);
     }catch(error){
         res.status(500).json(error);
     }

}

module.exports = {
    GetAllUser,
    GetById,
    DeleteById,
    UpdateUser
}