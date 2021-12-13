const express = require('express')
const router = express.Router()
const messageController = require('../controllers/profile')

router.get('/', messageController.getMessages)

router.post('/createMessage', messageController.createMessage)

router.put('/thumbUp', messageController.thumbUp)

router.put('/thumbDown', messageController.thumbDown)

router.delete('/deleteMessage', messageController.deleteMessage)

module.exports = router