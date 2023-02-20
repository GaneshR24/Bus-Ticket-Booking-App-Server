require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db/connect");
db();

app.use(express.json());
app.use(cors());

const usersRoute = require("./routes/usersRoute");
const busesRoute = require("./routes/busesRoute");
const bookingsRoute = require("./routes/bookingsRoute");

app.use("/api/users", usersRoute)
app.use("/api/buses", busesRoute);
app.use("/api/bookings", bookingsRoute);

app.get("/", (req, res) => {
  res.send("Welcome to our Bus Ticket Booking Application!");
});

const PORT = process.env.PORT || 22001;

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
