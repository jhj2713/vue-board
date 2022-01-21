const db = require("../../../config/db");
const conn = db.init();

exports.signup = (req, res) => {
  body = req.body;
  sql = "INSERT INTO user (user_id, nickname, password) values (?, ?, ?)";
  conn.query(sql, [body.user_id, body.nickname, body.password], (err, data) => {
    if (err) throw err;
    res.send({ success: true, user: data });
  });
};

exports.check = (req, res) => {
  user_id = req.query.user_id;
  sql = "SELECT * FROM user WHERE user_id = ?";
  conn.query(sql, [user_id], (err, data) => {
    if (err) throw err;
    res.send({ success: true, user: data });
  });
};
