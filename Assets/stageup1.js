#pragma strict
var current: int;
function OnTriggerEnter () {
if (PlayerPrefs.GetInt("Spawnpoint")==current) PlayerPrefs.SetInt("Spawnpoint", current+1);
}