#pragma strict
var a: float;
var a1: int;
var a2: int;
var k: boolean;
var x: float;
var z: float;
function Start () {
k=false;
}
function Update () {
transform.position+=transform.forward*Time.deltaTime;
if (transform.position.z>=18&&transform.position.x>=-7.5&&transform.position.z<=33&&transform.position.x<=7.5) {transform.Rotate(Vector3.up*a); k=true;}
if (k==true&&!(transform.position.z>=18&&transform.position.x>=-7.5&&transform.position.z<=33&&transform.position.x<=7.5)) { transform.rotation=Quaternion.Euler(0,a1,0); k=false;}
if (transform.position.z>=54||transform.position.x>=30||transform.position.z<=-2||transform.position.x<=-40) {transform.position=Vector3(x,0,z);
 transform.rotation=Quaternion.Euler(0,a2,0);}
}