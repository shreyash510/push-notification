
const express = require('express')
const router = express.Router();
const fetch = require('node-fetch')

router.get('/notification', (req, res)=>{
    // res.send('this is router home page')
let notification = {
    'title' : 'title of notification',
    'text' : 'subtitle'
}

var fcm_token = [];

var notification_body ={
    'notification' : notification,
    'registration_ids': fcm_token
}

    fetch('https://fcm.googleapis.com/fcm/send',{
        'method': 'POST',
        'headers':{
            'Authorization':'keys'+'AAAAKKQkHF0:APA91bExpo3fxDad8JoFGN4sgyMDrMcXsvEbVeQLkggJRruPlC0ybOq640KPPhCkje4FkPE02WlhHW-LXSnpdpi6fksC9XBgPDJIY98N6i-qLZNcCbmeZ6fFZUea-0-lelfsvW2EyBUC',
            'Content-Type':'application/json'
        },
        'body': JSON.stringify(notification_body)
    }).then(()=>{res.send('notification send success')}).catch(e=>res.send('notification send failed')
    )
})

module.exports = router;