const router = require('express').Router();
const {getCategories,createCategorie} = require('../controllers/categorieController');

router.get('/',getCategories);
router.post('/',createCategorie);



module.exports = router;