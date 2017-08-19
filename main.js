var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyUSB0', {
    baudRate: 115200,
    dataBits: 8,
    xon: true,
    xoff: true,
    xany: true
});

// setTimeout(function(){port.write("H1\n", function(err) {
//     if (err) {
//       return console.log('Error on write: ', err.message);
//     }
//     console.log('message written');
// });},1000);

// Open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message);
})

port.on('data', function (data) {
    console.log(data.toString('utf-8'));
});
