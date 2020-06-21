const express = require('express');         
const bodyParser = require('body-parser');  
const app = express();                     
const hbs = require('hbs');                
const path = require('path');               


app.use(bodyParser.json())                         
app.use(bodyParser.urlencoded({ extended: true }))  

app.set('views',path.join(__dirname,'views'));             
app.set('view engine', 'hbs');                            
app.use('/assets',express.static(__dirname + '/public'));   


const dbConnect = require('./config/connect.js');
const mongoose = require('mongoose');


mongoose.connect(dbConnect.database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the MongoDB database");    
}).catch(err => {
    console.log('Unable to connect to the MongoDB database', err);
    process.exit();
});

require('./app/routes/app.routes.js')(app);


app.listen(3000, () => {
    console.log("Server listening on port 3000");
});