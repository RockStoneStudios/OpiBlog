const Repository = require('../repository/repositoryCategory');

const createCategorie = async (req,res)=>{
    const {name} = req.body;
    if(name.length < 1) return res.status(400).json({message : "name not valid"});
     try{
         const categorie = await Repository.CreateCategory(req.body);
         res.status(201).json(categorie);
     }catch(error){
         res.status(500).json(error);
     }


}


const getCategories = async(req,res)=>{
    try{
        const categories = await Repository.getAll();
        res.status(200).json(categories);
    }catch(error){
        req.status(500).json(error);
    }
}


module.exports = {
    getCategories,
    createCategorie
}