var uvAnimationTileX = 24;
var uvAnimationTileY = 1;
var framesPerSecond = 10.0;
 
function Update () {
	var index : int = Time.time * framesPerSecond;
	index = index % (uvAnimationTileX * uvAnimationTileY);
	var size = Vector2 (1.0 / uvAnimationTileX, 1.0 / uvAnimationTileY);
	var uIndex = index % uvAnimationTileX;
	var vIndex = index / uvAnimationTileX;
	var offset = Vector2 (uIndex * size.x, 1.0 - size.y - vIndex * size.y);
 
	GetComponent.<Renderer>().material.SetTextureOffset ("_MainTex", offset);
	GetComponent.<Renderer>().material.SetTextureScale ("_MainTex", size);
}