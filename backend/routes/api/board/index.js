const router = require("express").Router();
const dao = require("./dao");

router.get("/", dao.list);
router.get("/:id", dao.view);
router.post("/", dao.add);
router.delete("/", dao.delete);
router.put("/", dao.modify);

router.all("*", (req, res) => {
  res
    .status(404)
    .send({ success: false, msg: `board unknown uri ${req.path}` });
});

module.exports = router;
