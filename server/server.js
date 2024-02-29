require("dotenv").config();
const express = require('express');
var cors = require('cors')
const app = express();
const port = 4001;
const authrouter = require("./router/auth-route");
const contactrouter=require("./router/contact-route")
const serviceroute=require("./router/serviceroute")
const { mongodbconnect } = require("./database/db");
const errorMiddleware=require("./middliwares/error-middileware")
const corsOptions = {
    origin: "http://localhost:8080",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };
  app.use(cors(corsOptions));

app.use(express.json())

app.use("/api/auth", authrouter);
app.use("/api/form",contactrouter)
app.use("/api/data-services-provide",serviceroute)
app.use(errorMiddleware)
mongodbconnect().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at the port number ${port}`);
    });
});

