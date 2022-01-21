const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("good");
});

router.all("*", (req, res) => {
  res
    .status(404)
    .send({ success: false, msg: `board unknown uri ${req.path}` });
});

module.exports = router;
