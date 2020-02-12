#pragma strict
var ram: GameObject;
var Animat: Animator;
var player: GameObject;
var dialog1: GameObject;
var firstmeet: boolean;
var t: float;
var nm1: GameObject;
var cam: GameObject;
var button1: GameObject;
var button2: GameObject;
var button3: GameObject;
var button4: GameObject;
var inputer: GameObject;
var nm2: GameObject;
private var a1: boolean;
private var a2: boolean;
private var a3: boolean;
private var a4: boolean;
private var a5: boolean;
function Start () {
Animat=GetComponent(Animator);
firstmeet=false;
t=0;
a1=true;
a2=true;
a3=true;
a4=true;
a5=true;
}
function Update () {
var lookd=player.transform.position-gameObject.transform.position;
lookd.y=0;
 if (lookd.sqrMagnitude<25&&firstmeet==false) {firstmeet=true; Animat.SetBool("near", true);}
 if (firstmeet==true&&a1==true) t+=Time.deltaTime;
 if (t>1&&a1==true) {dialog1.SetActive(true); a1=false; t=0;}
 if (lookd.sqrMagnitude<0.7&&firstmeet==true&&a1==false) {
 	Animat.SetBool("hello",true); 
 	if (a2==true) {nm1.SetActive(true); 
 		a2=false;}
	transform.rotation=Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(lookd),2*Time.deltaTime);
	if (a3==true) t+=Time.deltaTime;
	if (t>3&&a3==true) {Animat.SetBool("yname",true); nm1.GetComponent.<UI.Text>().text="Я хочу тебя запомнить под особым именем. Можешь придумать его?";}
	if (t>5&&a3==true) Animat.SetBool("yname",false);
	if (t>7&&a3==true) {inputer.SetActive(true); a3=false; t=0;}
	if (NameCreator.ended==true&&a4==true) {nm2.SetActive(true); Animat.SetBool("named",true); t+=Time.deltaTime;}
	if (t>2&&a4==true&&a3==false) nm2.GetComponent.<UI.Text>().text="Итак, "+PlayerPrefs.GetString("Charactername")+", предлагаю пройти в почтовый отдел и обсудить там твои обязанности.";
	if (t>6.5&&a4==true&&a3==false) {a4=false; t=0; a5=false;}
	ram.SetActive(true);
 	button1.SetActive(false);
 	button2.SetActive(false);
 	button3.SetActive(false);
 	button4.SetActive(false);
 	madrun.forw=false;
 	madrun.left=false;
 	madrun.right=false;
 	cam.transform.localPosition=Vector3(2,1,-1);
 	cam.transform.localRotation=Quaternion.Euler(0,300,0);}

  if (a5==false) {
	ram.SetActive(false);
 	button1.SetActive(true);
 	button2.SetActive(true);
 	button3.SetActive(true);
 	button4.SetActive(true);
 	cam.transform.localPosition=Vector3(2,7,-3);
 	cam.transform.localRotation=Quaternion.Euler(45,330,0);
 	Destroy(this);
 	}
}