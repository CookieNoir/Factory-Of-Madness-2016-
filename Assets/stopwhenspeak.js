#pragma strict
var hello: GameObject;
var me:Transform;
var Animat: Animator;
public var img: GameObject;
function Start () {
hello=GameObject.FindWithTag("Hello");
me=gameObject.transform;
Animat=GetComponent(Animator);
}

function Update () {
var look_dir=hello.transform.position - me.position;
 look_dir.y=0;
 if (look_dir.sqrMagnitude<2) {gameObject.GetComponent.<madrun>().s=0; img.SetActive (true);
 Destroy(gameObject.GetComponent.<madrun>()); Animat.SetBool("moving",false); Destroy(this);}
}