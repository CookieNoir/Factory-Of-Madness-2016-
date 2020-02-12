#pragma strict
var f: float;
var t: float;
var x: float;
var t1: float;
function Start () {
t1=0;
t=0;
x=1;
}
function Fade() {
    for (f = 1.0; f >= -0.05; f -= 0.1) {
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
if (runbutton.isrunning==true) FadeIn(); else Fade();
t1+=Time.deltaTime;
if (t1<1) x+=Time.deltaTime*0.5; else if (t1>=1&&t1<2) x-=Time.deltaTime*0.5; else t1=0;
gameObject.transform.localScale.x = x;
gameObject.transform.localScale.y = x;
}