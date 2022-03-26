const Repository = require('../repository/repositoryUser');
const {PasswordEncrypt,PasswordCompare} = require('../helpers/EncryptPassword');
const {GenerateToken} = require('../helpers/GenerateToken');

const Register = async(req,res)=>{
    const {username,email,password, profilePic } = req.body;
  
       if(username.length<1) return res.status(400).json({message : "username not valid"});
       if(!email.includes('@') || !email.endsWith('.com')) return res.status(400).json({message : "Email not valid"});
       if(password.length<8) return res.status(400).json({message : "Password must contain 8 characteres"});
       
       const userEmail = await Repository.getUserEmail(email);
       
       if(!userEmail) {
          const passwordE = await PasswordEncrypt(password);
           const userSave = await Repository.SaveUser({
               username,
               email,
               password : passwordE,
               profilePic
           });
            if(!userSave){
            res.status(500).json({message : "External Error"});
            }
            res.status(201).json(userSave);
        }
    return res.status(400).json({message : "Email already exists"});  

      
}

const Login = async(req,res) =>{
     const {username,password} = req.body;
 
      try{
        
      
     const user= await Repository.getUserName(username);
    
    console.log( "Controller----"+user);
     if(user){
        
         const comparePassword = await PasswordCompare(password,user.password);
         if(comparePassword){
             const payload = {email : user.email, username : user.username}
             const token = await GenerateToken(payload);
             res.status(200).json(user)
         }
         res.status(401).json({message : "Password  Incorrect"});
     }
     res.status(500).json({message : "External Error"});
    }catch(error){
        console.log(error);
    }
}


module.exports= {
    Register,
    Login
}