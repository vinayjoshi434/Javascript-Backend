// one way to define the db utility handler

const asynchandler=(requesthandler)=>{

return (req ,res,next)=>{
            Promise.resolve(requesthandler(req ,res,next)).catch((err)=>{
                   next(err)
            })
    }
}


// second way is try /catch syntax


// const asynchandler = (func) => {
//    return  async (req, res, next) => {
//         try {
//             await func(req, res, next)
//         }
//         catch (err) {
//             res.status(err.code || 500).json(
//                 {
//                     success:'false',
//                     message : err.message

//                 }
//             )
//         }
// }
// }










export default asynchandler