const jwt = require('jsonwebtoken');

const GenerateToken = async (payload) =>{
     const token = await jwt.sign(payload,process.env.TOKEN_SECRET);
     return token;
}


module.exports = {
    GenerateToken
}