#pragma strict
var Animat: Animator;
var cam: GameObject;
function Start () {if (PlayerPrefs.GetInt("Spawnpoint")>3) Destroy(this);
Animat=GetComponent(Animator);
}

function Update () {
cam.GetComponent.<MovementCam>().enabled=false;
if (gameObject.transform.position.z<=15) {madrun.forw=true;
gameObject.GetComponent.<madrun>().s=0.5f;} else madrun.forw=false;
if (nickmuffin2.lastphrace==true) {gameObject.transform.position=Vector3(-2.5,0,32.4); gameObject.transform.rotation=Quaternion.Euler(0,0,0);}

}