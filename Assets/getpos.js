#pragma strict
var t: float;
function Start () {
t=0;
}

function Update () {
t+=Time.deltaTime;
if (teleporter.teleported==true) {
gameObject.transform.position.x=teleporter.telex;
gameObject.transform.position.y=teleporter.teley;
gameObject.transform.position.z=teleporter.telez;
gameObject.transform.rotation.y=teleporter.roty;
teleporter.teleported=false;}
if (t>1) Destroy(this);
}