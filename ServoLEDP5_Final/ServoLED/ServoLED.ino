#include <Servo.h>

Servo myservo;  // create servo object to control a servo
int pos = 0;    // variable to store the servo position
int LED = 9;

void setup() {
  Serial.begin(9600);
    pinMode(2, INPUT_PULLUP);
    pinMode(LED, OUTPUT);
    myservo.attach(8);
}

void loop() {
 int buttonState = digitalRead(2);
    if (digitalRead(2) == LOW) {
        myservo.write(90);
        delay(100);
        digitalWrite(LED,LOW);
 } else { 
  myservo.write(-90);
  delay(100);
  digitalWrite(LED,HIGH);
 }
 Serial.println(buttonState);
}
