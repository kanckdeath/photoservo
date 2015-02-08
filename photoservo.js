var five = require("johnny-five"),
 board, photoresistor, servo;
board = new five.Board();

board.on("ready", function() {
	photoresistor = new five.Sensor({
    pin: "A2",
  });
  
    servo = new five.Servo(12);
    servo1 = new five.Servo(11);
	board.repl.inject({
    pot: photoresistor, servo: servo, servo1: servo1
  });
  
	  
  photoresistor.on("data", function() {
    console.log(this.value);
	if (this.value > 1000)
	{
		servo.to(180);
		servo1.to(180);
	}
	else 
	{
		servo.to(0);
		servo1.to(0);
	}
  });
});
