const SECRET = "jwtSecret";
const TOKEN_TIME = 1000 * 60 * 60 * 24;
const FILTER_ROUTER = [/^\/login/,/^\/register/,/^\/addColumnUploadImg/,/^\/upload/];
module.exports = {
  SECRET,
  TOKEN_TIME,
  FILTER_ROUTER
};





