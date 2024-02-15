import path from 'path'
import multer from 'multer'

var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads/')
    },
    filename: (req,file,cb)=>{
        let ext = path.extname(file.originalname)
        cb(null, `${Date.now()}-${file.originalname.substr(0,file.originalname.indexOf('.'))}${ext}`)
    }
})

var upload = multer({
    storage: storage,
    fileFilter:(req,file,callback)=>{
        if(file.mimetype === 'application/pdf'){
            callback(null,true);
        }else{
            console.log("Only pdf file supported")
            callback(null,false)
        }
    }
})

export default upload