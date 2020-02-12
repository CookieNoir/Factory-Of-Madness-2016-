#pragma strict
var number: int;
function Update () {
if (PlayerPrefs.GetInt("Spawnpoint")>number) Destroy(gameObject);
}