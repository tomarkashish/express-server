const express = require("express");
const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to E-Commerce API");
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
