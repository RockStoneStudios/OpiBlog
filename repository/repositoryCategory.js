const Category = require('../models/Category');


const CreateCategory = async(payload) =>{
     const newCategory = new Category(payload);
     const categorie = await newCategory.save();
         return{
             categorie
         }
    

}


const getAll = async() =>{
    const categories = await Category.find();
    return {
        categories
    }
}


module.exports = {
    CreateCategory,
    getAll
}