const express = require("express");
const { swaggerUi, swaggerSpec } = require('./swagger');
const sequelize = require("./util/database");
const User = require("./models/users");
const app = express();

// Middleware to serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access.Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methlods",
    "GET",
    "POST",
    "PUT",
    "DELETE"
  );
  next();
});

app.use("/users", require("./routes/users"));

(async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(process.env.EXTERNAL_PORT || 3001, () => {
      console.log("Server is running on port 3001");
    });
  } catch (error) {
    console.log(error);
  }
})();