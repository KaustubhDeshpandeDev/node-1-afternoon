const express = require('express');
const bodyParser = require('body-parser');
const port = 3006; 
const mc = require(__dirname + '/controllers/messages_controller');

const app = express ();
app.use(bodyParser.json())
app.use( express.static( __dirname + '/../public/build' ) );

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
const messagesBaseUrl = "/api/messageArr";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl,mc.read)
app.put( `${messagesBaseUrl}/:id`, mc.update );
app.delete( `${messagesBaseUrl}/:id`, mc.delete );


/*
YOOOOOO
post - create 
get - read
put - update
delete - delete 
*/ 