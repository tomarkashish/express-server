const express= require("express");
const app=express();
app.use(express.json());

app.get("/", (req, res)=>{
res.send("Welcome to the Dynamic Routes Server!");
});

app.get("/welcome/:username", (req, res)=>{
const username= req.params.username;
const role=req.query.role || "User";
res.send(`Welcome ${username}, your role is ${role}`);

});
const PORT=5000;
app.listen(PORT, ()=>{
console.log(`Server is running on http://localhost:${PORT}`);
});