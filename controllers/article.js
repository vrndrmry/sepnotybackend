import articleModel from '../models/Article.js'

export const getAllArticles = async (req,res)=>{

    try{
        res.status(200).json(await articleModel.find().sort({ createdAt: -1 }).limit(10))
    }catch{
        res.status(500).json({msg:"There is an error in fetching all articles"})
    }
}

// Creating an article

export const createArticle = async(req,res)=>{

    try{
        res.json(req.body)
    }catch(err){
        res.status(500).json({message:err})
    }
}


