const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated!');
    error.statusCode = 401;
    throw error;
  }
  var token;
  if(authHeader.includes('Bearer')){
    token = authHeader.split(' ')[1];
  }else{
    token = authHeader;
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'secretfortoken');
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error = new Error('Not authenticated!');
    error.statusCode = 401;
    throw error;
  }
  req.isLoggedIn = true;
  req.userId = decodedToken.uid;
  req.role = decodedToken.role;
  req.email = decodedToken.email;
  next();
};