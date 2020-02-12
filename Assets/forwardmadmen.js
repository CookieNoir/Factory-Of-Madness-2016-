#pragma strict

function Start () {

}

function Update () {
gameObject.transform.position+=gameObject.transform.forward*Time.deltaTime;
if (gameObject.transform.position.z>25) gameObject.transform.position.z=5;
if (gameObject.transform.position.z<4) gameObject.transform.position.z=24;
}