import { v2 as cloudinary } from 'cloudinary '
import fs from "fs"






cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret  
});


const upload_cloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null
        }

        //upload the file on cloudinary

        const response = await cloudinary.uploader.upload
            (
                localFilePath, {
                resource_type: "auto"
            }
            )
        //file has been uploaded successfully
        return response
    }
    catch (err) {
        fs.unlinkSync(localFilePath)  //remove the locally saved temperory file as upload operation got failed
        return null
    }
}




export default upload_cloudinary