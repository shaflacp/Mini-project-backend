const Usermodel = require("../Model/Usermodel");
const jwt = require('jsonwebtoken');
const createToken = (userId)=>{
    const token = jwt.sign({userId},"JWT",{expiresIn:'1h'});
    return token;
}
module.exports.signup=async(req,res,next) =>{
    console.log(req.body,"%%%%%%%%%%%%%%%%%%%%%")
const{email,password,username}=req.body;
    try{
        const emailExist=await Usermodel.findOne({email:email});
        if (emailExist){
            return res.json({message:"Email already exists",status:false});
        }
        const newUser=new Usermodel({
            userName:username,
            email:email,
            password:password,
        })
        const userDetails= await (newUser.save());
        const token= createToken(Usermodel._id);
        return res.json({
            message:"Account created successfully",
            status:true,
            token,
        });

    } catch(error){
        console.log(error);
        return res.json({message:"Internal server in sign up",status:false})

        
    }
}
    module.exports.login = async (req, res, next) => {
        console.log(req.body, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        const { userName, password } = req.body;
        try {
            const user = await Usermodel.findOne({ userName: userName });
            if (!user) {
                return res.json({ message: "User not found", status: false });
            }
          
            const token = createToken(user._id);
            return res.json({
                message: "Login successful",
                status: true,
                token,
            });
        } catch (error) {
            console.log(error);
            return res.json({ message: "Internal server error in login", status: false });
        }
    };




