#pragma strict
function Update () {
if (PlayerPrefs.GetInt("Spawnpoint")>1) Application.LoadLevel(2);
}