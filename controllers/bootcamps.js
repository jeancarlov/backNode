const Bootcamp = require("../models/Bootcamp");

// This are middleware
// @Description Get all bootcamps
// @ Route GET/api/v1/bootcamps
// @access public

exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: "Get route request is working => show all" });
};

// @ Description single bootcamp
// @ Route GET/api/v1/bootcamps/:id
// @access public

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: `Get result ${req.params.id}` });
};

// @ Description create new bootcamp
// @ Route post/api/v1/bootcamps
// @access private  meaning login or token is necessary
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
// @ Description update new bootcamp
// @ Route put/api/v1/bootcamps
// @access private  meaning login or token is necessary
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    msg: `Post route request is working => Display something ${req.params.id}`,
  });
};
// @ Description Delete new bootcamp
// @ Route delete /api/v1/bootcamps
// @access private  meaning login or token is necessary
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: `Delete result ${req.params.id}` });
};
