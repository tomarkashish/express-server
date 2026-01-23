const express= require("express");
const app=express();
app.use(express.json());
app.get("/orders", (req, res)=>{
res.send("Here is the list of all orders.");
});

app.post("/orders", (req, res)=>{
res.send("A new order has been created.");
});

app.get("/users", (req, res)=>{
res.send("A new user has been added.");
});

app.post("/users", (req, res)=>{
res.send("A new user has been added.");
});
app.get("/", (req, res)=>{
res.send("Welcome to the Express Server!");
});

const PORT=3000;
app.listen(PORT, ()=>{
console.log(`Server is running on http://localhost:${PORT}`);
});
