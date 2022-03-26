const router = require('express').Router();
const {GetAllUser,GetById,DeleteById,UpdateUser} =require('../controllers/userController');

router.get('/',GetAllUser);
router.get('/:id',GetById);
router.delete('/:id',DeleteById);
router.put('/:id',UpdateUser);


module.exports = router;