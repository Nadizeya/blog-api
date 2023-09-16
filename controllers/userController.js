const User = require('../models/userModel')
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

//loginuser
const loginUser = async(req,res) => {

    const {email, password} = req.body

    try{
        //logging in 
        const user = await User.login(email, password)

        //creating jwt token and authentication
        const token = createToken(user._id)

        res.status(200).json({email, token})

    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//signup User
const signupUser = async(req,res) => {

    const {email, password} = req.body

    try{
        //saving in db
        const user = await User.signup(email, password)

        //creating jwt token and authentication
        const token = createToken(user._id)

        res.status(200).json({email, token})

    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {signupUser, loginUser}