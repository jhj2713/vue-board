const db = require("../../../config/db");
const conn = db.init();

exports.list = (req, res) => {
  let ipp = 10;
  let totalCount = 0;
  let block = 10;
  let total_page = 0;
  let page = 1;
  let start = 0;
  let end = ipp;
  let start_page = 1;
  let end_page = block;
  let where = "";

  body = req.query;

  if (body.keyword) where += ` AND title like '%${body.keyword}%' `;
  sql = ` SELECT count(*) cnt FROM board WHERE board_code = ? ${where} `;
  conn.query(sql, [body.board_code], (err, data) => {
    if (err) throw err;
    totalCount = data[0].cnt;

    total_page = Math.ceil(totalCount / ipp);

    if (body.page) page = body.page;
    start = (page - 1) * 10;
    start_page = Math.ceil(page / block);
    end_page = start_page * block;

    if (total_page < end_page) end_page = total_page;

    let paging = {
      totalCount: totalCount,
      total_page: total_page,
      page: page,
      start_page: start_page,
      end_page: end_page,
      ipp: ipp,
    };

    sql = ` SELECT * FROM board WHERE board_code = ? ${where} ORDER BY id DESC LIMIT ?, ? `;
    conn.query(sql, [body.board_code, start, end], (err, list) => {
      if (err) throw err;

      res.send({ success: true, list: list, paging: paging });
    });
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

exports.view = (req, res) => {
  body = req.query;
  id = req.params.id;
  sql = "SELECT * FROM board WHERE board_code = ? AND id = ?";

  conn.query(sql, [body.board_code, id], (err, view) => {
    if (err) throw err;
    res.send({ success: true, view: view });
  });
};

exports.delete = (req, res) => {
  body = req.query;
  sql = "DELETE FROM board WHERE id = ?";
  conn.query(sql, [body.id], (err, result) => {
    if (err) throw err;
    res.send({ success: true, result: result });
  });
};
