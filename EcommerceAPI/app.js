const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
const productRoutes = require("./routes/productRoutes");

app.use("/products", productRoutes);

// Default route (optional)
app.get("/", (req, res) => {
  res.send("E-Commerce API is running");
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
