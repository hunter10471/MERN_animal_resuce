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
            });
            next();
        } catch (error) {
            res.redirect('/error',500);
            logger.error({message:'Token verification failed.',error});
            throw error;
        }
    }else{
        res.redirect('/login',401);
        logger.error('Unauthenticated action.');
        throw new Error('Unauthenticated action.');
    }
}


const verifyTokenAndAuth = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if(req.user._id === req.params.id || req.user.isAdmin ){
            next();
        }
        else{
           logger.error('There was an error authenticating this action.');
           res.redirect('/error',500);
        };
    });
}


const verifyTokenAndAdmin = () =>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }
        else{
            logger.error('Forbidden admin action by unauthenticated user.')
            res.redirect('/login',401);
        }
    })
}



module.exports = { generateAuthToken, verifyTokenAndAdmin, verifyTokenAndAuth };