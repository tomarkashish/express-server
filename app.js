const express = require("express");
const app = express();

app.use(express.json());

app.use("/users", require("./routes/userRoutes"));
app.use("/products", require("./routes/productRoutes"));
app.use("/cart", require("./routes/cartRoutes"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
