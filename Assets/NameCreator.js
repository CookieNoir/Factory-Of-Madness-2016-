#pragma strict
var f: float;
public static var ended: boolean;
function Start () {
ended=false;
} 
function FadeIn() {
    for (f = 0; f<=0.60; f += 0.05) {
        var c = gameObject.GetComponent.<UI.RawImage>().color;
        c.a = f;
        gameObject.GetComponent.<UI.RawImage>().color = c;
        yield;  
    }
}
function End () {
PlayerPrefs.SetString("Charactername", gameObject.GetComponent.<UI.InputField>().text); ended=true; gameObject.SetActive(false);
}
function Update () {FadeIn();}