//Imports
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'WHmzEvKMuPeH2RRisyCC5kMJ8DvdONHAsSHpQj3pdYmFFSl5QseKrS5nIjiJ8Qa';

//Exported functions
module.exports = {
    generateTokenForUser: function(userData){
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '2h'
        })
    },

    verifyJWTToken: function(token) 
{
  return new Promise((resolve, reject) =>
  {
    jwt.verify(token, JWT_SIGN_SECRET, (err, decodedToken) => 
    {
      if (err || !decodedToken)
      {
        return reject(err)
      }

      resolve(decodedToken)
    })
  })
}

}