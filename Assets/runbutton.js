#pragma strict
var mad: GameObject;
var Animat: Animator;
public static var isrunning: boolean;
function Start () {
isrunning=false;
}
function Clicked ()
 {isrunning=!isrunning;}
function Update () {
if (isrunning==true) {mad.GetComponent.<madrun>().s=2; Animat.SetBool("running",true);gameObject.GetComponent.<UI.RawImage>().color.a=1;} else
{mad.GetComponent.<madrun>().s=1; Animat.SetBool("running",false); gameObject.GetComponent.<UI.RawImage>().color.a=0.3;}
}