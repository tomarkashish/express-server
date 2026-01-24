const express= require("express");
const app=express();
app.use(express.json());

const userRoutes=require("./routes/userRoutes");
const productRoutes=require("./routes/productRoutes");
const cartRoutes=require("./routes/cartRoutes");

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/carts", cartRoutes);

app.get("/", (req, res)=>{
res.send("Welcome to the ecommerce APi!");
});

app.use((req, res)=>{
res.status(404).send("Page not found");
});

app.listen(5000,()=>{
console.log("Server is running on port 5000");

});