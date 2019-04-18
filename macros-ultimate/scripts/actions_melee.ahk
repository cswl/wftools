
Action_Melee_Attack() {
if isActiveWarframe() {
	Send  e 
	}
else  {
	SetTimer  "Action_Melee_Attack" , Off
	}
return
}

Action_Slide_Attack() {
if isActiveWarframe()  {
		Send  "{w down}"
		Sleep 100
		Send  "^e"
		Sleep  100
		Send  "{w up}"
}
else  
		SetTimer  "Action_Slide_Attack" , Off
return
}