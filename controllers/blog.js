export const getAllPost = (req,res)=>{
    res.send("Getting all post")
}

export const  createNewPost = async(req,res) =>{
    try{
        const {title,summary,content,image}=req.body
    }catch{}
    res.send(params.id)
}