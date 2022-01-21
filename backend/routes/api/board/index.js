const router = require("express").Router();
const dao = require("./dao");

router.get("/", dao.list);
router.get("/:id", dao.view);
router.post("/", dao.add);

router.all("*", (req, res) => {
  res
    .status(404)
    .send({ success: false, msg: `board unknown uri ${req.path}` });
});

module.exports = router;
