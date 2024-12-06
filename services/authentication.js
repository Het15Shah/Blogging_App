const JWT = require('jsonwebtoken');

const secret = "$uperMan@123";

function createTokenForUser(user){
    const payload = {
        _id: user._id,
        email: user.email,
        role: user.role,
        profileImageURL: user.profileImageURL,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token){
    try{
        const user = JWT.verify(token, secret);
        return user;
    } catch(err){
        return null;
    }
}

module.exports = {
    createTokenForUser,
    validateToken
};