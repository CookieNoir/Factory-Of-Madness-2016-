#pragma strict
var f: float;
var t: float;
var tmax: float;
function Start () {
t=0;
}
function Fade() {
    for (f = 1.0; f >= -0.05; f -= 0.1) {
        var c = gameObject.GetComponent.<UI.Text>().color;
        c.a = f;
        gameObject.GetComponent.<UI.Text>().color = c;
        yield;  
    }
}
function FadeIn() {
    for (f = 0; f<=1.05; f += 0.1) {
        var c = gameObject.GetComponent.<UI.Text>().color;
        c.a = f;
        gameObject.GetComponent.<UI.Text>().color = c;
        yield;  
    }
}
function Update () {
	if (t<tmax) t+=Time.deltaTime;
	if (t<1) FadeIn();
	if (t>=tmax-1) Fade();
	if (t>=tmax) gameObject.SetActive(false);
}