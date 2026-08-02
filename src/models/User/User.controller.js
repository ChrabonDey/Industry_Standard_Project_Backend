import {asyncHandler} from '../../uitls/asyncHandler'

const registerUser=asyncHandler(async(req,res)=>{
    const{username,email,fullname,password}=req.body

    
})



export {registerUser}