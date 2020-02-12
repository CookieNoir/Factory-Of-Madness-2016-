#pragma strict
var a: GameObject;
var y: float;
function Start () {

}

function Update () {
y=a.GetComponent.<dirigeablespec>().speed;
transform.Rotate(Vector3.up*y);
}