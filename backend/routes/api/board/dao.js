const db = require("../../../config/db");
const conn = db.init();

exports.list = (req, res) => {
  conn.query("select * from board", (err, row) => {
    if (err) throw err;
    res.send({ success: true, data: row });
  });
};

exports.add = (req, res) => {
  body = req.body;
  sql =
    "INSERT INTO board (board_code, title, content, user_id, regdate) values (?, ?, ?, ?,now());";
  conn.query(
    sql,
    [body.board_code, body.title, body.content, body.user_id],
    (err, result) => {
      if (err) throw err;
      res.send({ success: true });
    },
  );
};
