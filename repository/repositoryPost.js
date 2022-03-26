const Post = require('../models/Post');


const getAll = async () =>{
    const posts = await Post.find();
    return {
        posts
    }
}

const getByUsername = async(username)=>{
    const posts = await Post.find({username});
    return {
        posts
    }
}

const getByCategories = async(catName) =>{
    const posts = await Post.find({
        categories :{
            $in:[catName]
        }
    });
     return {
         posts
     }
}

const savePost = async(payload) =>{
     try{

         const post = new Post(payload);
          const savePost = await post.save();
          return savePost;
     }catch(error){
         console.log(error);
     }
}

const getById = async (id) =>{
    const post = await Post.findById(id);
    return {
        post
    }
}

const deleteById = async (id)=>{
    const deletePost = await Post.findByIdAndDelete(id);
    return {
        deletePost
    }
}


const updateById = async (id,payload)=>{
    const updatePost = await Post.findByIdAndUpdate(id,{$set : payload},{new : true});
    return {
        updatePost
    }
}



module.exports = {
    getAll,
    savePost,
    getById,
    deleteById,
    updateById,
    getByCategories,
    getByUsername
}