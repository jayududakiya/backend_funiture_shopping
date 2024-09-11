const jwt = require("jsonwebtoken");
const userServices = require("../service/user.service");
const userService = new userServices();

exports.verifyToken = async (req, res, next) => {
  try {
    
    const authToken = req.headers["authorization"];
    console.log('tokens',authToken);
    if (!authToken) return res.status(401).json({ message: "Unauthorized..." });
    const token = authToken.split(" ")[1];
    const payload = await jwt.verify(token, process.env.JWT_SEC_KEY);
    const user = await userService.findUser({
      _id: payload.userId,
      isDeleted: false
    });
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};
