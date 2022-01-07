const mysql = require("mysql");
var Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "whatsapp",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection Established");
  await connection.endAsync();
}
// connectionCheck();

async function sendMessage(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  await connection.queryAsync(`insert into user(userID, chat) values(?,?)`, [
    user.userID,
    user.chat,
  ]);
  //   console.log("Message sent successfully.!!");

  await connection.endAsync();
}
// sendMessage({ userID: "user1", chat: "Hiee" });

async function showMessage() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const list = await connection.queryAsync(`select * from user`, []);
  //   console.log(list);
  await connection.endAsync();
  return list;
}

// showMessage();
module.exports = { sendMessage, showMessage };
