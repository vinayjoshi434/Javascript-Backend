import { Router } from "express";
import RegisterUser from "../controllers/user.controller.js";

const UserRouter=Router()

UserRouter.route("/register").post(RegisterUser)
//Register user jo ki controller ka method he ...jo /register pe execute hoga 



export default UserRouter
