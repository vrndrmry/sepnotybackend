import path from 'path'
import multer from 'multer'

var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads/')
    },
    filename: (req,file,cb)=>{
        let ext = path.extname(file.originalname)
        cb(null, `${Date.now()}-${file.originalname.split(' ').join('')}`)
    }
})

var upload = multer({
    storage: storage,
    fileFilter:(req,file,callback)=>{
        const allowedTypes= ['application/pdf']
        if(allowedTypes.includes(file.mimetype)){
            // console.log(file)
            callback(null,true);
        }else{
            // console.log("Only pdf file supported")
            callback(new Error("Only pdf file supported"))
        }
    },
    limits: 1024*1024*30
})

export default upload