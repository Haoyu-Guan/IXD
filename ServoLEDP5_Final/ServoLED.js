var serial; 
var options = {
    baudRate: 9600
}; 
var portName = '/dev/cu.usbmodem14601';
var inData;
var button1;
//var on;
//var off;

function setup() {
    createCanvas( windowWidth, windowHeight );
    serial = new p5.SerialPort();
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.open(portName, options);
    
    //on = loadImage("https://i.imgur.com/jqwHZRb.png");
    //off = loadImage("https://i.imgur.com/H9Pxqop.png");
    //background(64);
}

function draw() {
    if (button1 == 1) {
       background(220);
       fill(255,255,153);
       ellipse(width/2,height/2,300.300);
    } else {
       background(64);
       fill(236);
       ellipse(width/2,height/2,300.300);
    }
}
    
function serialEvent() {
    var inData = serial.readStringUntil('\r\n');
    if (inData.length > 0) {  
        button1 = Number(inData);
    }
    console.log(button1);
}

function serialError(err) {
    println('Something went wrong with the serial port. ' + err);
}
