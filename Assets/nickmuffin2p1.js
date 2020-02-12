#pragma strict

function Update () {
if (PlayerPrefs.GetInt("Spawnpoint")>3) {gameObject.transform.position=Vector3(-2.5,0,33); gameObject.transform.rotation=Quaternion.Euler(0,120,0);}
}
