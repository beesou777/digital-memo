const multer = require("multer")


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        // check the mimetype  of file
        const allowedFileType = ['image/png','image/jpg','image/jpeg']
        if(!allowedFileType.includes(file.mimetype)){
            cb(new Error("This filetype is not supported "))
            return
        }
        cb(null,'./uploads')
    },
filename:function(req,file,cb)
{
    cb(null,Date.now() + "-" + file.originalname)
}
})

module.exports = {multer,storage}