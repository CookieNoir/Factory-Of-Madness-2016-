#pragma strict
var ram: GameObject;
var text1: GameObject;
var text2: GameObject;
var text3: GameObject;
var cam: GameObject;
var cam1: GameObject;
var Animat: Animator;
var t: float;
var button1: GameObject;
var button2: GameObject;
var button3: GameObject;
var button4: GameObject;
var wall: GameObject;
var hero: GameObject;
public static var lastphrace: boolean;
private var amain: boolean;
private var a1: boolean;
private var a2: boolean;
private var a3: boolean;
private var a4: boolean;
private var a5: boolean;
function Start () {
if (PlayerPrefs.GetInt("Spawnpoint")>3) Destroy(this);
Animat=GetComponent(Animator);
t=0;
amain=true;
a1=true;
a2=false;
a3=false;
a4=false;
a5=false;
lastphrace=false;
}

function Update () {
if (amain==true) {
	if (gameObject.transform.position.z<=15) gameObject.transform.position+=Vector3.forward*Time.deltaTime*0.5;
	Animat.SetBool("walk", true);
	if (a1==true) {	t+=Time.deltaTime; text1.SetActive(true); cam.transform.localPosition=Vector3(0,1,10); cam.transform.localRotation=Quaternion.Euler(10,180,0);
	if (t>2.5&&t<=8) text1.GetComponent.<UI.Text>().text="С завтрашнего дня ты начнешь работать в этом отделе курьером. Но ты не печалься. Твоя работа будет весьма интересной.";
	if (t>8&&t<=13.5) text1.GetComponent.<UI.Text>().text="Почтовый отдел - один из самых главных, ведь именно здесь происходит принятие заказа и отправление товара клиенту.";
	if (t>13.5&&t<=17) text1.GetComponent.<UI.Text>().text="Он состоит из двух огромных команд сотрудников, благодаря кооперации между которыми наша фабрика может";
	if (t>17) {text1.GetComponent.<UI.Text>().text=" похвастать весьма быстрой доставкой и отсутствием проблем с изделиями."; a1=false; t=0; a2=true;}}
	if (gameObject.transform.position.z>15&&a2==true) {
		t+=Time.deltaTime;
		text2.SetActive(true);
	 	cam.transform.localPosition=Vector3(-12,5,0);
	  	cam.transform.localRotation=Quaternion.Euler(30,330,0);
	  	if (t>5&&t<=10) text2.GetComponent.<UI.Text>().text="Изначально отдел принадлежал членам только этой команды, но однажды возникли трудности...";
	  	if (t>10) {t=0; a2=false; a3=true;}}
	  	if (a3==true) {
	  	t+=Time.deltaTime;
	  	cam.transform.localPosition=Vector3(21,8,4);
	  	cam.transform.localRotation=Quaternion.Euler(55,305,0);
	  	if (t<=5) text2.GetComponent.<UI.Text>().text="Которые были устранены командой 'Тета', предназначенной для работы с важными бумагами.";
	  	if (t>5&&t<=10) text2.GetComponent.<UI.Text>().text="Успехи этой команды были настолько велики, что один сотрудник мог выполнить дневную норму меньше, чем за час.";
	  	if (t>10) {t=0; a3=false; a4=true;}}
	  	if (a4==true) {
	  	t+=Time.deltaTime;
	  	cam.transform.localPosition=Vector3(12,5,12);
	  	cam.transform.localRotation=Quaternion.Euler(40,280,0);
	  	if (t<=5) text2.GetComponent.<UI.Text>().text="Тогда их работа была усложнена, и теперь этот дружный коллектив отвечает за всё, что связано с бумагами.";
	  	if (t>5&&t<=10) text2.GetComponent.<UI.Text>().text="Иногда они даже устраивают день оригами.";
	  	if (t>10) {t=0; a4=false; a5=true;}}
	  	if (a5==true) {
	  	t+=Time.deltaTime;
	  	cam.transform.localPosition=Vector3(1,3,26);
	  	cam.transform.localRotation=Quaternion.Euler(30,300,0);
	  	lastphrace=true; text3.SetActive(true);
	  	gameObject.transform.position=Vector3(-2.5,0,33); gameObject.transform.rotation=Quaternion.Euler(0,180,0); Animat.SetBool("yname",true);
	  	if (t>7) {a5=false; t=0; amain=false;}
	  	}
	ram.SetActive(true);
 	button1.SetActive(false);
 	button2.SetActive(false);
 	button3.SetActive(false);
 	button4.SetActive(false);
 	wall.GetComponent.<hidewall>().enabled=false;}
if (amain==false) {
	ram.SetActive(false);
 	button1.SetActive(true);
 	button2.SetActive(true);
 	button3.SetActive(true);
 	button4.SetActive(true);
 	wall.GetComponent.<hidewall>().enabled=true;
 	hero.GetComponent.<mainherolvl11>().enabled=false;
 	cam1.GetComponent.<MovementCam>().enabled=true;
 	cam.transform.localPosition=Vector3(2,7,-3);
 	cam.transform.localRotation=Quaternion.Euler(45,330,0);
 	PlayerPrefs.SetInt("Spawnpoint", 4);
}
}