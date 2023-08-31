const express = require('express')
const app = express()
const port = 5500
const cors = require("cors")
const Roku = require('rokujs');
var process = require('process');

app.use(express.json())
app.use(cors())

const IP = require('ip');
const Nodeku = require('nodeku')
// console.log(ipAddress);


const data = async () => await Nodeku()
  .then(device => {
    console.log(`device found at: ${ device.ip() }`)
    // 'xxx.xxx.xxx.xxx:8060'
    return device.apps()
  })
  .then(apps => {
    apps.forEach(app => console.log(app))
    // [{ id, name, type, version }, ...]
  })
  .catch(err => {
    console.error(err.stack)
  })
  // console.log(data)
  
  app.get('/device', async (req, res) => {
    data()
  // Roku.discover(function (devices) {
    // const ipAddress = IP.address()
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // res.send(ipAddress)
    // console.log(ipAddress);
    // res.end()
  // });
})

  app.listen(port, ()=>{
    console.log("Server Start 5500");
  })
