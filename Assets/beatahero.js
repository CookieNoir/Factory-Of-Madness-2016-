#pragma strict
public var enemy : Transform;
public var player: GameObject;
var Animat: Animator;
var t4: GameObject;
var o: float;
function Start () {
Animat=GetComponent(Animator);
enemy=gameObject.transform;
player=GameObject.FindWithTag("Player");
}

function Update () {
var look_dir=player.transform.position - enemy.position;
 look_dir.y=0;
 if (look_dir.sqrMagnitude>0.4) enemy.position+=enemy.forward*1.5*Time.deltaTime;
 else {o+=Time.deltaTime; Animat.SetBool("ATK",true);}
 if (o>1.6f) t4.SetActive (true);
 if (o>3f) {PlayerPrefs.SetInt("Spawnpoint", 1); Application.LoadLevel(1);}
 }