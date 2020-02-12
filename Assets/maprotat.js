#pragma strict

function Start () {

}

function Update () {
transform.Rotate(Vector3.up*-3*Time.deltaTime);
}