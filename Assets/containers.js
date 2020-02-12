#pragma strict
var tg: int;
function Start () {

}

function Update () {
if (tg==1) transform.position+=transform.forward*Time.deltaTime*0.25;
if (tg==2) transform.position+=transform.right*Time.deltaTime*0.25;
if (transform.position.x>20&&tg==1) transform.position.x=-20;
if (transform.position.x<-20&&tg==2) transform.position.x=20;
}