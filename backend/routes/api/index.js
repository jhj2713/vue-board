var router = require("express").Router();
const board = require("./board");
const user = require("./user");

/* GET home page. */
router.all("*", (req, res, next) => {
  console.log("path=" + req.path);
  next();
});

router.use("/board", board);
router.use("/user", user);

router.all("*", (req, res) => {
  res.status(404).send({ success: false, msg: `api unknown uri ${req.path}` });
});

module.exports = router;
