const Post = require('../models/Post');
const Repository = require('../repository/repositoryPost');


const getAllPost = async (req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
   
    
     try{
          let posts;
          if(username){

               posts = await Repository.getByUsername(username)
          } else if(catName){
              posts = await Repository.getByCategories(catName)
          }else {
              posts = await  Repository.getAll();
          }
        res.status(200).json(posts);
     }catch(error){
         console.log(error);
     }
}


const getPostId = async(req,res)=>{
    try{
        const post = await Repository.getById(req.params.id);
         res.status(200).json(post);
    }catch(error){
        console.log(error);
    }
}

const createPost = async (req,res) =>{
    const {title,desc,photo,categories} = req.body;
    console.log("Controller---"+req.body.title);
     if(title.length<1) return res.status(400).json({message : "title not valid"});
     if(desc.length<1) return res.status(400).json({message : "desc not valid"});
     if(photo.desc<1) return res.status(400).json({message : "photo not valid"});
  

     try{
         const post = await Repository.savePost(req.body);
          res.status(201).json(post);
     }catch(error){
         res.status(500).json(error);
     }
}


const deletePost = async (req,res)=>{
     console.log("hello");
      console.log("Controller------"+req.params.id);
    try{
        const deletePost = await Repository.deleteById(req.params.id);
        res.status(200).json({message : "Delete with Exit",deletePost});
    }catch(error){
        res.status(500).json(error);
    }
}

const updatePost = async(req,res)=>{
     console.log(req.body);
     console.log(req.params.id);
     try{

         const updatePost = await Repository.updateById(req.params.id,req.body);
         res.status(200).json(updatePost);
     
     }catch(error){
         res.status(500).json(error);
     }
} 



module.exports = {
    getAllPost,
    getPostId,
    updatePost,
    deletePost,
    createPost
}