var mysql = require("mysql");
var dbInfo = require("./config");

mysql.createConnection(dbInfo).connect((err) => {
  if (err) {
    console.log(err);
  }
});

let dbcon = {
  init: function () {
    return mysql.createConnection(dbInfo);
  },
  conn: function (con) {
    con.connect(function (err) {
      if (err) {
        console.log("mysql connection error :" + err);
        setTimeout(init, 2000);
      } else {
        console.log("mysql connection sucessfully");
      }
    });
  },
};

module.exports = dbcon;
