const User = require('../models/User');


const getAll = async() =>{
    const users = await User.find();
    return {
        users
    }
}

const getId = async(id) =>{
    const user = await User.findById(id);
    return {
        user
    }
}
const getUserEmail = async(email) =>{
    console.log(email);
    try{

        const userEmail = await User.findOne({email : email});
        return userEmail;
    }catch(error){
        console.log(error);
    }
}

const getUserName = async(username) =>{
    try{
        const user = await User.findOne({username : username});
        console.log("Repository----"+user);
        return user;
    }catch(error){
        console.log(error)
    }
}

const deleteUserById = async(id) =>{
    const userDelete = await User.findByIdAndDelete(id);
    return userDelete;
}

const SaveUser = async(payload) =>{
    const newUser ={
        username : payload.username,
        email : payload.email,
        password : payload.password,
        profilePic : payload.profilePic
    }
      try{

          const user = new User(newUser);
          const saveUser = await user.save();
          return {
              saveUser
          }
      }catch(error){
          console.log(error);
      }
}

const updateUser = async (id,payload) =>{
    const updateUser = await User.findByIdAndUpdate(id, {$set : payload}, {new : true});
    return updateUser;

}

module.exports ={
    getAll,
    getId,
    getUserEmail,
    SaveUser,
    deleteUserById,
    updateUser,
    getUserName
}