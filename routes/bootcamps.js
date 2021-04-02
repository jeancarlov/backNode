
const express = require('express');
const router = express.Router();

// route creation
router.get("/", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, msg: "Get route request is working => show all" });
});
router.get("/:id", (req, res) => {
  res.status(200).json({ sucess: true, msg: `Get result ${req.params.id}` });
});
router.post("/", (req, res) => {
  res
    .status(200)
    .json({
      sucess: true,
      msg: "Post route request is working => Creat someting ",
    });
});

// Put is for updating
router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({
      sucess: true,
      msg: `Post route request is working => Display something ${req.params.id}`,
    });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ sucess: true, msg: `Delete result ${req.params.id}` });
});

module.exports = router;