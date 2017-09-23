var SerialPort = require('serialport')
var socket = require('socket.io-client')('http://localhost:8080')
var fs = require('fs')

var port = new SerialPort('/dev/ttyUSB0', {
  baudRate: 115200,
  dataBits: 8,
  xon: true,
  xoff: true,
  xany: true
})

// socket.on('connect', function () {})
// socket.on('event', function (data) {})
// socket.on('disconnect', function () {})

var datafile
function startDataRec () {
  var dateobj = new Date()
  var tstamp = dateobj.toISOString().replace(/:/g, '.')
  // datafile = fs
}

socket.on('connect', () => {
  socket.emit('connType', 'rpi-client')
  console.log('> WS Opened')
})
port.on('open', () => {
  console.log('> Serial Opened')
})

function serialWrite (data) {
  port.write(data, (err) => {
    if (err) { return console.log('Error: ', err.message) }
    console.log('> Message Written')
  })
}
socket.on('serial-write', serialWrite)

port.on('data', (data) => {
  var dataString = data.toString()
  console.log('> Data Output:')
  console.log(dataString)
  socket.emit('serial-recv', dataString)
})
