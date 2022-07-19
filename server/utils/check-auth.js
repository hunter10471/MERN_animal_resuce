const jwt = require('jsonwebtoken');
const logger = require('./logger');

const generateAuthToken = (user) => {
    try {
        const token = jwt.sign({_id:user._id, isAdmin:user.isAdmin},process.env.JWT_SECRET,{
            expiresIn:'3h'
        })
        return token;

    } catch (error) {
        logger.error('Token generation error.');
        throw error;
    }
};




const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.auth;
    if(authHeader){
        try {
            jwt.verify(authHeader,process.env.JWT_SECRET,(err,user)=>{
                if(err) throw err;
                req.user = user;
                req.isAuth = true;
                next();
            });
        } catch (error) {
            logger.error({message:'Token verification failed.',error});
            req.isAuth = false;
            next();
        }
    }else{
        req.isAuth = false;
        next();
    }
}


const verifyTokenAndAuth = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if(req.isAuth){
            if(req.user._id === req.headers.id || req.user.isAdmin ){
                if(req.user.isAdmin) req.isAdmin = true;
                else req.isAdmin = false;
                req.isAuth = true;
                next();
            }else{
                req.isAuth = false;
                next();
            }
        }
        else{
           req.isAuth = false;
           next();
        };
    });
}





module.exports = { generateAuthToken, verifyTokenAndAuth };