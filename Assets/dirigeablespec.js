#pragma strict
public var speed: float;
var t: float;
function Start () {
t=0;
}

function Update () {
t+=Time.deltaTime;
if (t>1) {speed+=0.25; t=0;}
transform.position+=transform.up*-1*speed*Time.deltaTime;
if (transform.position.x<-50) transform.Rotate(Vector3.forward*-0.03);
if (transform.position.x<-350) {transform.position=Vector3(40,-75,68); transform.rotation=Quaternion.Euler(270,270,0); speed=0.5;}
}