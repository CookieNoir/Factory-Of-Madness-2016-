#pragma strict
var dog: GameObject;
var t: float;
function Start () {
t=0f;
}
function Update () {
if (gameObject.active==true) {t+=Time.deltaTime; if (t>2) dog.SetActive (true);}
}