const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db')



/// load env vars

dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

//  call route files

const bootcamps = require("./routes/bootcamps");

const app = express();

// in order to use req.body middleware needs to be added with express BODY PARSER
app.use(express.json());

// DEV loging middleware from morgan to run only in dev envmironment
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// mount the router to specif url

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// global hangler for unhandle promises rejection

process.on('unhandledRejection', (err, promise ) => {
  console.log(`Error: ${err.message}`.red);
  //close server & exit process with failure 1
  server.close(() => process.exit(1))
})