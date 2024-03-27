//express initialization
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const userRouter = require("./Routers/userRouter");
const collegeRouter = require("./Routers/collegeRouter");
const reviewsRouter = require("./Routers/reviewsRouter");
const schoolRouter = require("./Routers/schoolRouter");
const utilRouter = require("./Routers/Utils");
const playwayRouter = require("./Routers/playwayRouter");
const playwayReviewRouter = require("./Routers/playwayReviewRouter");
const schoolReviewRouter = require("./Routers/schoolReviewRouter");

app.use(express.static("./uploads"));

app.use(express.json({ limit: "10mb" }));

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use("/user", userRouter);
app.use("/reviews", reviewsRouter);
app.use("/playwayReview", playwayReviewRouter);
app.use("/schoolReviews", schoolReviewRouter);
app.use("/college", collegeRouter);
app.use("/util", utilRouter);
app.use("/school", schoolRouter);
app.use("/playway", playwayRouter);

app.use(express.static("./uploads"));

app.listen(port, () => {
  console.log("Server running on port : 5000");
});
