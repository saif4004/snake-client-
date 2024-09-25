const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on('connect', () => {
    console.log('Successfully connected to server');
    conn.write("Name: SA");
    // conn.write("Move: up"); 

  });
  conn.on('data', (data) => {
    console.log('Server says: ', data.toString());
  });
  conn.on('error', (error) => {
    console.error('An error occurred: ', error);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;