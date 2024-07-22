import asynchandler from "../utils/asynchandler.js"




const RegisterUser = asynchandler(async (req, res) => {
    res.status(200).json({
        message: "backend learning"
    })
   

})

export default RegisterUser;