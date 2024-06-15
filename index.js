const express = require('express');
const mongoose = require('mongoose'); 
const Product = require('./models/product.model.js'); 
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false})); 


//routes
app.use("/api/products",productRoute)

// listening part shows on terminal


app.get('/', (req, res) => {
    res.send('Hello,  i from Node API');
});
// this can be seen on the localhost page 

// good practice to connect to DB first then run server
mongoose.connect('mongodb+srv://csinha:firstAPI093forme@backenddb.ongpvio.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected!'); 
    app.listen(7000,() => {
        console.log('Server on port 7000'); 
       }); 
  }  
)
.catch( () => {
    console.log("Connection failed!"); 
}
); 