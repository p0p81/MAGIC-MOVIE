const jwt = require("../lib/jwt");
const { SECRET } = require("../config/configSecret");

exports.authMid = async (req, res, next) => {
  //get token
  const token = req.cookies["auth"];

  if (!token) {
    return next();
  }

  try {
    const decodedToken = await jwt.verify(token, SECRET);

    req.user = decodedToken;
    next();
  } catch {
    res.clearCookie("auth");
    res.redirect("/login");
  }

  //validate token
};

exports.isAuth = (req, res, next) => {
  if (!req.user) {
    res.redirect("/login");
  }
  next();
};
