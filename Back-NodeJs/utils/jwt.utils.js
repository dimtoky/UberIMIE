//Imports
const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'WHmzEvKMuPeH2R';

//Exported functions
module.exports = {
  generateTokenForUser: (userData) => jwt.sign({
    name: userData.name,
    id: userData._id,
  },
    JWT_SIGN_SECRET,
    {
      expiresIn: '24h'
    }),



  verifyJWTToken: (req, res, next) => {
    const token = req.header("auth-token");
    if (!token)
      return res.status(401).json({ error: "Access denied" });
    try {
      const verified = jwt.verify(token,JWT_SIGN_SECRET);
      req.user = verified;
      next(); // to continue the flow
    } catch (err) {
      res.status(400).json({ error: "Token is not valid" });
    }
  }

}