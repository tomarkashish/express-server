const express= require('express');
const app=express();
const PORT= 3200;
app.use((req, res, next)=>{
console.log("Authenticationmiddleware called.")})
app.listen(PORT, () =>{
console.log("Server is up and running on port 3000! Ready to handle requests.")
});