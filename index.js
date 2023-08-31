const express = require('express')
const app = express()
const port = 5500
const cors = require("cors")
const Roku = require('rokujs');
var process = require('process');

app.use(express.json())
app.use(cors())

const IP = require('ip');
const ipAddress = IP.address()
// console.log(ipAddress);

app.get('/device', async (req, res) => {
  Roku.discover(function (devices) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(devices)
    console.log(devices);
    res.end()
  });
})

function StartPort(){
  app.listen(port, ipAddress)

}

StartPort()