
import mongoose, { Schema } from "mongoose"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userschema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        index: true, // in order to make the feild searchable   we have to append the attribute {Index:true}
        unique: true
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    Fullname: {
        type: String,
        required: true,
        trim: true,
        index: true, // in order to make the feild searchable   we have to append the attribute {Index:true}

    },
    avatar: {
        type: String, // cloudinary url using 
        required: true,

    },
    coverImage: {
        type: String, // cloudinary url using 

    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is true']
    },
    refreshToken: {
        type: String
    }

}, { timestamps: true })

// here we have hooks to perform certain actions like password encryption etc , in which we add any logic we want to perform
// eg: pre ,post

// middleware he to next ka access to hoga hi
userschema.pre("save", async function (next) {
    // callback lete he but normal function leng rather than arrrow bcoz arrow function ke pass this ka access nhi hota 

    if (!this.isModified("password")) {
        return next()
    }



    this.password = bcrypt.hash(this.password, 10)
    next()
})


userschema.methods.ispasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userschema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,                             // this.wali entity database se aa rahi he
            Email: this.Email,
            username: this.username,

        },
        process.env.Access_token_secret,
        {
            expiresIn: process.env.Access_token_expiry
        }

    )
}


userschema.methods.generateREfreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,                             // this.wali entity database se aa rahi he
           

        },
        process.env.Refresh_token_secret,
        {
            expiresIn: process.env.Refresh_token_expiry
        }

    )
}

export const User = mongoose.model("User", userschema)