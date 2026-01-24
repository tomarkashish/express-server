const express=require("express");
const app=express();

const shopRoutes=require("./routes/shopRoutes");
app.use("/", shopRoutes);

app.listen(4000, ()=>{
console.log("Server running on port 4000");
});