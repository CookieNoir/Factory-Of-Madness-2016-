#pragma strict
var offsetcount: float;
var r: Renderer;
function Start () {
offsetcount=0;
r = GetComponent.<Renderer>();
}

function Update () {
offsetcount-=0.5*Time.deltaTime;
if (offsetcount<-1) offsetcount=0;
r.material.mainTextureOffset = Vector2(offsetcount, 0);
}