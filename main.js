var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyUSB0', {
    baudRate: 115200,
    dataBits: 8,
    xon: true,
    xoff: true,
    xany: true
});

port.on('open', () => {
  console.log('Port Opened');
});

setTimeout(function(){
port.write("H1\r\n", (err) => {
  if (err) { return console.log('Error: ', err.message) }
  console.log('message written');
});
},1000);

port.on('data', (data) => {
  /* get a buffer of data from the serial port */
  console.log(data.toString());
});
