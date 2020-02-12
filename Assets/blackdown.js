#pragma strict
var f: float;
public var next: boolean;
var t: float;
function Start () {
next=false;
t=0;
}
function Fade() {
    for (f = 1.0; f >= -0.05; f -= 0.02) {
        var c = gameObject.GetComponent.<UI.RawImage>().color;
        c.a = f;
        gameObject.GetComponent.<UI.RawImage>().color = c;
        yield;  
    }
}
function FadeIn() {
    for (f = 0; f<=1.05; f += 0.1) {
        var c = gameObject.GetComponent.<UI.RawImage>().color;
        c.a = f;
        gameObject.GetComponent.<UI.RawImage>().color = c;
        yield;  
    }
}
function Update () {
	if (t<1) t+=Time.deltaTime;
	if (t>=1) {if (next==false) Fade();
	if (next==true) FadeIn();
}}