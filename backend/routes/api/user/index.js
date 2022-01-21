const router = require("express").Router();
const dao = require("./dao");

router.post("/signup", dao.signup);
router.get("/check", dao.check);

router.all("*", (req, res) => {
  res
    .status(404)
    .send({ success: false, msg: `board unknown uri ${req.path}` });
});

module.exports = router;
