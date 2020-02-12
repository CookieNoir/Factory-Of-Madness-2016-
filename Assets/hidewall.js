#pragma strict
var b: GameObject;;
var f: float;
var limitX: float;
var limitZ: float;
var moreX: boolean;
var moreZ: boolean;
var fx: boolean;
var fz: boolean;
var mat: int;
function Start () {
}
function Fade() {
    for (f = 1; f>=-0.05; f -= 0.05) {
        var c = gameObject.GetComponent.<Renderer>().materials[mat].color;
        c.a = f;
        gameObject.GetComponent.<Renderer>().materials[mat].color = c;
        yield;  
    }
}
function FadeIn() {
    for (f = 0; f<=1.05; f += 0.05) {
        var c = gameObject.GetComponent.<Renderer>().materials[mat].color;
        c.a = f;
        gameObject.GetComponent.<Renderer>().materials[mat].color = c;
        yield;  
    }
}
function Update () {
if (moreX==true&&fx==true&&b.transform.position.x>limitX) Fade(); else {
if (moreZ==true&&fz==true&&b.transform.position.z>limitZ) Fade(); else {
if (moreX==false&&fx==true&&b.transform.position.x<limitX) Fade(); else {
if (moreZ==false&&fz==true&&b.transform.position.z<limitZ) Fade(); else FadeIn();
}}}}