//const express= require('express');
//const app=express();
//const PORT= 3200;
//app.use((req, res, next)=>{
//console.log("Authenticationmiddleware called.")})
//app.listen(PORT, () =>{
//console.log("Server is up and running on port 3000! Ready to handle requests.")
//});
const express=require("express");
const app=express();
app.use(express.json());
const bookRoutes=require("./routes/bookRoutes");
app.use("/", bookRoutes);

app.listen(4000,()=>{
console.log("Library server running on port 4000");
});