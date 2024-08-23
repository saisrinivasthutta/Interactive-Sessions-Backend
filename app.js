const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const schedulerRoutes = require("./routes/schedulerRoutes");

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.use("/api/scheduler", schedulerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
