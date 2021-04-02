// @ Description Logs request to console

// middleware logger. Remember to call next for the middle ware to continue with the next piece
const logger = (req, res, next) => {
  // req.hello = 'hello world';
  console.log(
    `${req.method}${req.protocol}://${req.get('host')}${req.orignalUrl}`
  );
  next();
};

module.exports = logger;
