const Message = require('../models/profile')

module.exports = {
    getMessages: async (req,res)=>{
        try{
            const result = await Message.find()
            res.render('profile.ejs', {
                messages: result})
        }catch(err){
            console.log(err)
        }
    },
    createMessage: async (req, res)=>{
        try{
            await Message.create({name: req.body.name, message: req.body.message, thumbUp: 0, thumbDown: 0})
            console.log('Message has been added!')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    },
    thumbUp: async (req, res)=>{
        try{
            await Message.findOneAndUpdate({message: req.body.message},{
                $set: {
                      thumbUp:req.body.thumbUp + 1,
                    }
            })
            console.log('Thumbsup Complete')
            res.json('Thumbsup Complete')
        }catch(err){
            console.log(err)
        }
    },
    thumbDown: async (req, res)=>{
        try{
            await Message.findOneAndUpdate({message: req.body.message},{
                $set: {
                      thumbDown:req.body.thumbDown + 1,
                    }
            })
            console.log('Thumbsdown Complete')
            res.json('Thumbsdown Complete')
        }catch(err){
            console.log(err)
        }
    },
    deleteMessage: async (req, res)=>{
        console.log(req.body.message)
        try{
            await Message.findOneAndDelete({message: req.body.message})
            console.log('Deleted Message')
            res.json('Deleted it')
        }catch(err){
            console.log(err)
        }
    }
}    