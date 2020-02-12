#pragma strict
var Name: String;
var t: float;
var black: GameObject;
var sx: float;
var sy: float;
var sz: float;
var rotatey: int;
function Start () {
t=0;
}

function OnTriggerEnter (mad : Collider) {
if (mad.tag=="Player") {Destroy(mad.GetComponent.<madrun>());
 mad.GetComponent.<Rigidbody>().isKinematic=true;
 black.GetComponent.<blackdown>().next=true;
 teleporter.telex=sx;
 teleporter.teley=sy;
 teleporter.telez=sz;
 teleporter.roty=rotatey;
 teleporter.teleported=true;}}
function OnTriggerStay (mad : Collider) {
if (mad.tag=="Player") t+=Time.deltaTime;
if (t>1) Application.LoadLevel(Name);}