const router = require('express').Router();
const {getAllPost,getPostId,createPost,deletePost,updatePost}= require('../controllers/postController');

router.get('/',getAllPost);
router.get('/:id',getPostId);
router.post('/',createPost);
router.delete('/:id',deletePost);
router.put('/:id',updatePost);


module.exports = router;