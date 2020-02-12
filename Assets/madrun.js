#pragma strict
public var s: float;
var r: int;
var Animat: Animator;
public static var forw: boolean;
public static var left: boolean;
public static var right: boolean;
function Start () {
Animat=GetComponent(Animator);
forw=false;
left=false;
right=false;
}

function Update () {
if (Input.GetKey(KeyCode.W)||forw==true) {transform.position+=transform.forward*s*Time.deltaTime; Animat.SetBool("moving",true);} else Animat.SetBool("moving",false);
if (Input.GetKey(KeyCode.A)||left==true) transform.Rotate(Vector3.down*r);
if (Input.GetKey(KeyCode.D)||right==true) transform.Rotate(Vector3.up*r);
}
function Forward () {forw=true;}
function ForwardDown () {forw=false;}
function Left () {left=true;}
function LeftDown () {left=false;}
function Right () {right=true;}
function RightDown () {right=false;}