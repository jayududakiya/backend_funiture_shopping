// Register User , Update User , Change Password , Delete User  , find User , login User

const userServices = require("../service/user.service");
const userService = new userServices();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltOrRounds = 10;

exports.registerUser = async (req, res) => {
  try {
    console.log("body=====>",req.body);
    let user = await userService.findUser({
      email: req.body.email,
      isDeleted: false
    });
    if (user) {
      return res.json({ message: "User Already Register..." });
    }
    user = await userService.addNewUser({ ...req.body });
    res.status(201).json({ user, message: "New User Registration Success..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server error..." });
  }
};



exports.loginUser = async (req, res) => {
    try {
        const user = await userService.findUser({ email : req.body.email, isDeleted : false });
        if(!user) return res.status(404).json({ message : 'User not Found...'});
        const isMatch =  await bcrypt.compare(req.body.password, user.password);
        if(!isMatch) return res.status(400).json({ message : 'Email OR Password not Match...'});
        const token = jwt.sign({userId : user._id}, process.env.JWT_SEC_KEY);
        return res.status(200).json({ message : 'User Login Success...', token});
        // return res.status(200).header("auth-token", token).json({ "token": token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : 'Internal Server error...' });
    }
};

exports.showUserProfile = async (req,res) => {
  try {
    const { userName , email  } = req.user;
    const user = {
      userName,
      email
    }
    res.status(200).json({user});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message : 'Internal Server error...' });
  }
}

exports.updateProfile = async (req, res) => {
  try {
    const file = req.files;
    console.log('files====',file);
    let user = req.user;
    const updateData = req.body;
    user = await userService.updateUser(user._id,updateData);
    return res.status(200).json({message : 'user is Updated',user})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message : 'Internal Server error...' });
  }
};

exports.changePassword = async (req, res) => {
  const { currentPassword , newPassword , conformPassword } = req.body;
  let {user} = req;
  const isMatch = bcrypt.compareSync(currentPassword,user.password);
  if(!isMatch) return res.status(400).json({message:"current Password Is not Match"});
  if(newPassword !== conformPassword) return res.status(400).json({message:"New Password Is not Match with conform Password"});
  // if(conformPassword !== newPassword) return res.status(400).json({message:"Conform Password Is not Match with New Password"});
  const hasPassword = bcrypt.hashSync(conformPassword,saltOrRounds);
  user = await userService.updateUser(user._id,{password : hasPassword});
  return res.status(200).json({message : 'Password Is Changed'});
};

exports.deleteUser = async (req, res) => {
  try {
    let user = req.user;    
    user = await userService.updateUser(user._id,{isDeleted : true});
    return res.status(200).json({message : 'User is Deleted...'})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message : 'Internal Server error...' });
  }
};