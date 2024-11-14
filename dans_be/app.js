const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/jobs", jobRoutes);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
