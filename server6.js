const express=require("express");
const app=express();
//app.get("/books", (req, res)=>{
//res.send("Books route working");
//});
app.use(express.json());

app.get("/books", (req, res)=>{
res.send("Here is the list of books!");
});

app.post("/books", (req, res)=>{
//console.log(req.body);
console.log("Received data:", req.body);
res.send("Book has been added!");
});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});