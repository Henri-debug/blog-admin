const express = require("express");
const app = express();




app.set("view engine",'ejs');


//routes
app.get("/", function(req,res){
     res.render('index');
});

//server
app.listen(8080,()=>{
      console.log("Connected");
});