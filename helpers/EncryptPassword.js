const bcrypt = require('bcrypt');



const PasswordEncrypt = async(password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}

const PasswordCompare = async(password,passwordSave) =>{
    return await bcrypt.compare(password,passwordSave);
}


module.exports = {
    PasswordEncrypt,
    PasswordCompare
}